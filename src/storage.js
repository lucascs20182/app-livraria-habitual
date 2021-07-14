import AsyncStorage from '@react-native-async-storage/async-storage';

export const storeData = async (key, value) => {
    try {
        const jsonValue = JSON.stringify(value);

        await AsyncStorage.setItem(`@storage_${key}`, jsonValue);
    } catch (e) {
        console.log("erro ao salvar dados");
    }
}

export const getData = async (key) => {
    try {
        const jsonValue = await AsyncStorage.getItem(`@storage_${key}`)

        if (jsonValue != null) {
            console.log(JSON.parse(jsonValue));
        }

        return jsonValue != null ? JSON.parse(jsonValue) : null;
    } catch (e) {
        console.log("erro ao recuperar dados");
    }
}

export const deleteKey = async (key) => {
    try {
        await AsyncStorage.removeItem(`@storage_${key}`);
    } catch (e) {
        console.log("erro ao deletar dados");
    }
}
