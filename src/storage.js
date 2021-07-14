import AsyncStorage from '@react-native-async-storage/async-storage';

export const storeData = async (key, value) => {
    try {
        const jsonValue = JSON.stringify(value);

        // console.log(key + ':' + jsonValue)

        await AsyncStorage.setItem(`@storage_${key}`, jsonValue);
    } catch (e) {
        console.log("erro ao salvar dados");
    }
}

export const getData = async (key) => {
    try {
        const value = await AsyncStorage.getItem(`@storage_${key}`)

        // if (jsonValue != null) {
        //     console.log('o' + JSON.parse(jsonValue));
        // }
        // console.log(key + ':' + value)

        return value != null ? JSON.parse(value) : null;
    } catch (e) {
        console.log("erro ao recuperar dados");
    }
}

export const deleteKey = async () => {
    try {
        await AsyncStorage.getAllKeys()
            .then(keys => AsyncStorage.multiRemove(keys))
            // .then(() => alert('success'));
    } catch (e) {
        console.log("erro ao deletar dados");
    }
}
