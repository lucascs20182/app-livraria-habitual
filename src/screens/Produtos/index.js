import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, Button, FlatList, TouchableOpacity } from 'react-native';

import { storeData, getData, deleteKey } from '../../storage';

import { obterTodos } from '../../services/api-produto';

export default function Produtos() {
    const [produtos, setProdutos] = useState([]);

    useEffect(() => {
        obterTodos()
            .then((resposta) => {
                setProdutos(resposta.data);
            })
            .catch((erro) => {
                alert("Erro ao listar produtos! Verifique o console.");
                console.log(erro);
            });
    }, [])

    return (
        <>
    {/* prevents routes being rendered before usuarioLogado' state is set */}
    { produtos.length != 0 ?
        <View style={styles.container}>
            <FlatList 
                data={produtos} 
                keyExtractor={item => item.id.toString()}
                renderItem={({item}) => (
                    <TouchableOpacity>
                        <Text>{item.nome}</Text>
                        <Text>{item.url}</Text>
                    </TouchableOpacity>
            )} />
        </View>
    :
        <Text></Text>
    }
    </> 
        
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
