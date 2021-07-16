import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, FlatList, TouchableOpacity } from 'react-native';

import { storeData } from '../../storage';

import { obterTodos } from '../../services/api-produto';

export default function ListaProdutos({ navigation }) {
    const [produtos, setProdutos] = useState([]);

    useEffect(() => {
        obterTodos()
            .then((resposta) => {
                setProdutos(resposta.data);
            })
            .catch((erro) => {
                alert("Erro ao listar produtos! Favor, atualizar o app.");
                console.log("Erro ao listar produtos: " + erro);
            });
    }, [])

    async function handleDetalhesDoPedido(item) {
        await storeData('produtoEmFoco', item);

        navigation.navigate('DetalhesDoPedido');
    }

    return (
        <>
            {produtos.length != 0 ?
                <View style={styles.container}>
                    <FlatList
                        data={produtos}
                        keyExtractor={item => item.id.toString()}
                        renderItem={({ item }) => (
                            <TouchableOpacity onPress={() => handleDetalhesDoPedido(item)}>
                                <Text>{item.nome}</Text>
                                <Text>{item.url}</Text>
                            </TouchableOpacity>
                        )} />
                </View>
                :
                <Text>Aguardando carregar</Text>
            }
        </>

    );
}

const styles = StyleSheet.create({
    container: {
        width: '100%'
    },
});
