import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { getData } from '../../storage';

export default function DetalhesDoPedido() {
  const [produto, setProduto] = useState({});

  useEffect(() => {
    async function recuperarProduto() {
      const response = await getData('produtoEmFoco');
      // console.log(response);
      
      setProduto(response);
  }

  recuperarProduto();   
  }, [])

  return (
    <>
    {Object.values(produto).length !== 0 ? 
      <View style={styles.container}>
        {console.log(produto)}
        <Text>detalhe do pedido</Text>
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
