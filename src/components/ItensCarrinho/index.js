import React, { useEffect, useState } from 'react';

import {
  StyleSheet, Text, View, ActivityIndicator, FlatList,
  Image, TouchableOpacity, Button
} from 'react-native';

import { obterDadosDoCliente } from '../../services/api-usuario';
import { obterCarrinhoCompras, removerItemDoPedido } from '../../services/api-pedido';

import { getData, storeData } from '../../storage';

export default function ItensCarrinho({ navigation }) {
  const [carrinhoCompras, setCarrinhoCompras] = useState({});

  useEffect(() => {
    async function prepararDados() {
      const id = await getData('idUsuario');

      obterDadosDoCliente(id)
        .then((resposta) => {
          obterCarrinhoCompras(resposta.data.pedidoAtivo)
            .then((resposta) => {
              setCarrinhoCompras(resposta.data);
            })
            .catch((erro) => {
              alert("Erro ao listar carrinho de compras! Verifique o console.");
              console.log(erro);
            });
        })
        .catch((erro) => {
          alert("Erro ao listar dados do usuário! Verifique o console.");
          console.log(erro);
        });
    }

    prepararDados();
  }, [])

  function handleExcluirItem(id) {
    removerItemDoPedido(id)
      .then((resposta) => {
        console.log(resposta.data);
      })
      .catch((erro) => {
        alert("Erro ao excluir item! Favor, atualize o app.");
        console.log("Erro ao listar produtos: " + erro);
      });
  }

  function handleEditarItem(itemCarrinho) {
    storeData('itemCarrinho', itemCarrinho);
    storeData('editar', { editar: true });
    storeData('produtoEmFoco', itemCarrinho.produto);

    navigation.navigate('DetalhesPedido');
  }

  return (
    <>
      {Object.keys(carrinhoCompras).length !== 0 ?
        <View style={styles.container}>


          {/* <View style={styles.container2}> */}
          <Text>Meu carrinho</Text>
          {carrinhoCompras.produtosDoPedido.length !== 0 ?
            <View style={{ height: 260 }}>
              <FlatList
                data={carrinhoCompras.produtosDoPedido}
                keyExtractor={item => item.id.toString()}
                renderItem={({ item }) => (
                  <View style={styles.itemContainer}>
                    <Image style={styles.tinyLogo}
                      source={{ uri: item.produto.url }} />
                    <View style={styles.infosItens}>
                      <Text>{item.produto.nome}</Text>
                      <Text>{item.produto.autor || 'Autor não cadastrado'}</Text>
                      <Text>{`R$ ${item.produto.preco}`}</Text>
                      <Text>{`quantidade: ${item.quantidadeProdutos}`}</Text>
                      <View style={styles.containerButton}>
                        <TouchableOpacity onPress={() => handleEditarItem(item)}
                          style={styles.botaoEditar}>
                          <Text>Editar</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => handleExcluirItem(item.id)}
                          style={styles.botaoExcluir}>
                          <Text>Remover</Text>
                        </TouchableOpacity>
                      </View>
                    </View>
                  </View>
                )} />
            </View>
            :
            <Text>Nenhum produto no carrinho</Text>
          }

          <Text>Total</Text>

          <Button title="Confirmar Compra" />

          {/* <Button title="Voltar" /> */}
          {/* </View> */}


        </View>
        :
        <View style={styles.container}>
          <ActivityIndicator size="large" color="#464646" />
        </View>
      }
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'space-around',
  },

  itemContainer: {
    flexDirection: 'row',
    marginVertical: 7,
    width: 287,    
    height: 119, // quando o título é muito grande, buga
    borderRadius: 20,
    borderWidth: 2,
    borderColor: 'rgba(0,0,0,.25)',
    padding: 10,
    paddingLeft: 20
  },

  infosItens: {
    width: 190
  },

  tinyLogo: {
    width: 57,
    height: 84,
    marginRight: 10
  },

  containerButton: {
    alignSelf: 'flex-end',
    flexDirection: 'row'
  },

  botaoEditar: {
    width: 40,
    height: 16,
    borderWidth: 1,
    borderColor: '#b4b4b4',
    marginRight: 10
  },
});
