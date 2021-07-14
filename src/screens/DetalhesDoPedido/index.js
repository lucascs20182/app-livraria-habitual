import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';

import { getData } from '../../storage';

import { adicionarItemAoPedido } from '../../services/api-pedido';

export default function DetalhesDoPedido({ navigation }) {
  const [produto, setProduto] = useState({});
  const [idUsuario, setIdUsuario] = useState(-1);
  const [quantidade, setQuantidade] = useState(1);

  useEffect(() => {
    async function recuperarProduto() {
      const response = await getData('produtoEmFoco');
      const responseToken = await getData('idUsuario');
      
      setProduto(response);
      setIdUsuario(parseInt(responseToken));
  }

  recuperarProduto();   
  }, [])

  function handleQuantidade(aumentar) {
    if(aumentar) {
      (quantidade + 1) > produto.quantidadeEmEstoque ?
        setQuantidade(produto.quantidadeEmEstoque)
      :
        setQuantidade(quantidade + 1)

      return
    } 

    if(quantidade <= 1) {
      return setQuantidade(1);
    }

    return setQuantidade(quantidade - 1);
  }

  function handleAddAoCarrinho() {
    adicionarItemAoPedido(idUsuario, produto.id, quantidade)
      .then(resposta => {
        console.log(resposta)
        
        navigation.navigate('Carrinho');
      })
      .catch(erro => {
        
        console.log(erro);
      })
  }

  return (
    <>
    {Object.values(produto).length !== 0 ? 
      <View style={styles.container}>
        {console.log(produto.id, quantidade, idUsuario)}
        <Text>{produto.url}</Text>
        <Text>{produto.nome}</Text>
        <Text>{produto.descricao}</Text>

        <View>
          <Text style={{margin: 20, justifyContent: 'center'}}>Quantidade a ser comprada</Text>
          <View style={styles.containerButton2}>
            <TextInput value={quantidade} onChangeText={e => setQuantidade(e)}
              style={styles.inputQuantidade} keyboardType='numeric'
              maxLength={3} editable={false} />

              <Button title="+" onPress={() => handleQuantidade(true)} />
              <Button title="-" onPress={() => handleQuantidade(false)} />
          </View>
        </View>

        <View style={styles.containerButton}>
          <Button title="Adicionar ao carrinho" onPress={() => handleAddAoCarrinho()} />
          <Button title="Cancelar" />
        </View>
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

  containerButton: {
    width: 300,
    height: 100,
    justifyContent: 'space-between',
    marginTop: 40
  },

  containerButton2: {
    flexDirection: 'row',
    width: 100,
    height: 25
  },

  inputQuantidade: {
    width: 20,
    backgroundColor: '#ddd',
    marginHorizontal: 10,
  }
});
