import React, { useEffect, useState } from 'react';

import { 
    StyleSheet, Text, View, FlatList, TouchableOpacity,
    ActivityIndicator, Image
} from 'react-native';

import { storeData } from '../../storage';

import { obterTodos } from '../../services/api-produto';

export default function ListaProdutos({ navigation }) {
    const [produtos, setProdutos] = useState([]);

    useEffect(() => {
        obterTodos()
            .then((resposta) => {
                console.log(resposta.data)
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
                            <View style={styles.produto}>
                                <Image style={styles.tinyLogo}
                                    source={{ uri: item.url }} />
                                
                                <View style={styles.infosProduto}>
                                    <View style={styles.tituloAutor}>
                                        <Text style={styles.titulo}>{item.nome}</Text>
                                        
                                        <Text style={styles.autor}>
                                            {item.autor || 'Autor não informado'}
                                        </Text>
                                    </View>
                                    
                                    <Text style={styles.preco}>{`R$ ${item.preco}`}</Text>

                                    <TouchableOpacity
                                        onPress={() => handleDetalhesDoPedido(item)}
                                        style={styles.botaoAdicionar}>
                                            <Text style={styles.textoBotaoAdicionar}>
                                                Adicionar
                                            </Text>
                                    </TouchableOpacity>
                                </View>
                            </View>
                        )} />
                </View>
            :
                <View style={styles.containerIndicator}>
                    <ActivityIndicator size="large" color="#464646" />
                </View>
            }
        </>

    );
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '87%'
    },

    containerIndicator: {
        width: '100%',
        height: '100%',
        alignItems: 'center',
        justifyContent: 'center',
    },

    produto: {
        flexDirection: 'row',
        padding: 10,
        marginLeft: 10,
        marginTop: 5
    },

    infosProduto: {
        marginLeft: 20,
        justifyContent: 'space-between',
        // alignItems: 'center',
        flexWrap: 'wrap',
        width: 140
    },

    tinyLogo: {
        width: 120,
        height: 180,
        // marginRight: 10
    },

    botaoAdicionar: {
        width: 118,
        height: 37,
        backgroundColor: '#000071',
        borderRadius: 4,
        justifyContent: 'center',
        alignItems: 'center'
    },

    textoBotaoAdicionar: {
        textTransform: 'uppercase',
        fontWeight: 'bold',
        fontSize: 14,
        color: "#fff"
    },

    // tituloAutor: {
        
    // },

    titulo: {
        fontWeight: '500',
        fontSize: 18,
        color: '#464646'
    },

    preco: {
        fontWeight: 'bold',
        fontSize: 18,
        color: '#000071'
    },

    autor: {
        fontWeight: '300',
        fontSize: 14,
        color: '#464646'
    }
});
