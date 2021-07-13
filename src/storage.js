import AsyncStorage from '@react-native-async-storage/async-storage';

export const storeData = async value => {
    try {
        const jsonValue = JSON.stringify(value);
        // boa prática: usar @storage_NomeDaChave
        await AsyncStorage.setItem('@storage_Key', jsonValue);
    } catch (e) {
        console.log("erro ao salvar dados");
    }
}

export const getData = async () => {
    try {
        const jsonValue = await AsyncStorage.getItem('@storage_Key')

        if (jsonValue != null) {
            console.log(JSON.parse(jsonValue));
        }

        return jsonValue != null ? JSON.parse(jsonValue) : null;
    } catch (e) {
        console.log("erro ao recuperar dados");
    }
}

export const deleteKey = async () => {
    try {
        await AsyncStorage.removeItem('@storage_Key');
    } catch (e) {
        console.log("erro ao deletar dados");
    }
}
