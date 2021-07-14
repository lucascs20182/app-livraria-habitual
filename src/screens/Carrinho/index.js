import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, FlatList, TouchableOpacity } from 'react-native';

import { obterDadosDoCliente } from '../../services/api-usuario';
import { obterCarrinhoCompras } from '../../services/api-pedido';

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

  return (


    <>
      {Object.keys(carrinhoCompras).length !== 0 ?
        <View style={styles.container}>
          {carrinhoCompras.produtosDoPedido.length !== 0 ?
            <FlatList
              data={carrinhoCompras.produtosDoPedido}
              keyExtractor={item => item.id.toString()}
              renderItem={({ item }) => (
                <TouchableOpacity>
                  <Text>{item.produto.nome}</Text>
                  <Text>{item.produto.url}</Text>
                </TouchableOpacity>
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
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
