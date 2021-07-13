import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

import { storeData, getData, deleteKey } from '../../storage';

export default function Produtos() {
    return (
        <View style={styles.container}>
            <Text>produtos</Text>
            <Button title="SALVAR" onPress={() => storeData({key: 'Salveiiii'})} />
            <Button title="RECUPERAR" onPress={() => getData()} />
            <Button title="DELETAR" onPress={() => deleteKey()} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
