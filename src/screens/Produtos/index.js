import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

import { storeData, getData, deleteKey } from '../../storage';

import { obterTodos } from '../../services/api-produto';

export default function Produtos() {
    const [produtos, setProdutos] = useState([]);

    useEffect(() => {
        obterTodos()
            .then((resposta) => {
                setProdutos(resposta.data);
                console.log(produtos);
            })
            .catch((erro) => {
                alert("Erro ao listar produtos! Verifique o console.");
                console.log(erro);
            });
    }, [])

    return (
        <View style={styles.container}>
            <Text>produtos</Text>
            <Button title="SALVAR" onPress={() => storeData({ key: 'Salveiiii' })} />
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
