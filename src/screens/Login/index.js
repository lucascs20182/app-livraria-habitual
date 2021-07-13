import React, { useState } from 'react';

import { storeData } from '../../storage';

import { StyleSheet, View, Text, TextInput, Button } from 'react-native';

export default function Login({ navigation }) {
  const [username, setUsername] = useState('');
  const [senha, setSenha] = useState('');

  function handleLogar() {
    console.log(username, senha);

    storeData({ key: 'Usuário logado' })

    navigation.navigate('Home');
  }

  return (
    <View style={styles.container}>
      <View>
        <View>
          <Text>Username</Text>
          <TextInput style={styles.textInput} placeholder="ex.: lucascs20182"
            value={username} onChangeText={e => setUsername(e)} />
        </View>

        <View>
          <Text>Senha</Text>
          <TextInput style={styles.textInput} placeholder="*******"
            secureTextEntry={true} value={senha} onChangeText={e => setSenha(e)} />
        </View>
      </View>

      <View style={styles.containerButton}>
        <Button title="Entrar" onPress={handleLogar} />
        <Button title="Cadastrar" onPress={() => navigation.navigate('Cadastro')} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textInput: {
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 4,
    width: 300,
  },
  containerButton: {
    width: 300,
    height: 100,
    justifyContent: 'space-between',
    marginTop: 40
  },
});
