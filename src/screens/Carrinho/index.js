import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';

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
    {/* prevents component being rendered before carrinhoCompras' state is set */}
    { Object.keys(carrinhoCompras).length !== 0 ?
      <View style={styles.container}>
        <Text>carrinho</Text>
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
