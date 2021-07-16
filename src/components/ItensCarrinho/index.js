import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, FlatList, Image, Button } from 'react-native';

import { obterDadosDoCliente } from '../../services/api-usuario';
import { obterCarrinhoCompras, removerItemDoPedido } from '../../services/api-pedido';

import { getData } from '../../storage';

export default function Carrinho() {
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
        // alert("Erro ao listar produtos! Verifique o console.");
        console.log("Erro ao listar produtos: " + erro);
      });
  }

  return (


    <>
      {Object.keys(carrinhoCompras).length !== 0 ?
        <View style={styles.container}>
          {carrinhoCompras.produtosDoPedido.length !== 0 ?
            <FlatList
              data={carrinhoCompras.produtosDoPedido}
              keyExtractor={item => item.id.toString()}
              renderItem={({ item }) => (
                <View style={styles.itemContainer}>
                  <Image style={styles.tinyLogo}
                    source={{ uri: item.produto.url }} />
                  <View style={{ alignItems: 'center' }}>
                    <Text>{item.produto.nome}</Text>
                    <View style={styles.containerButton}>
                      <Button title="Editar" onPress={() => {}} />
                      <Button title="Remover" onPress={() => handleExcluirItem(item.id)} />
                    </View>
                  </View>
                </View>
              )} />
            :
            <Text>Nenhum produto no carrinho</Text>
          }
        </View>
        :
        <Text>Aguardando carregar</Text>
      }
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },

  itemContainer: {
    marginVertical: 30,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start'
  },

  tinyLogo: {
    width: 100,
    height: 130,
    marginRight: 10
  },

  containerButton: {
    width: 150,
    // height: 55,
    justifyContent: 'space-between',
    // marginTop: 40
  },
});
