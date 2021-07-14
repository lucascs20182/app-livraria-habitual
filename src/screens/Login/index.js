import React, { useState } from 'react';

import { logar } from "../../services/api-usuario";
import { storeData } from '../../storage';

import { StyleSheet, View, Text, TextInput, Button, Image } from 'react-native';

export default function Login({ navigation }) {
  const [loading, setLoading] = useState(false);
  const [username, setUsername] = useState('');
  const [senha, setSenha] = useState('');

  function handleLogar() {
    setLoading(true);

    if (!username || !senha) {
      alert("Favor informar username e senha");
      return;
    }

    logar(username, senha)
      .then((resposta) => {
        const { Authorization, idUsuario } = resposta.data;
        
        storeData('token', Authorization);
        storeData('idUsuario', idUsuario);

        setLoading(false);

        navigation.navigate('Home');
      })
      .catch((erro) => {
        alert("Erro! Verifique o console.");
        console.log(erro);
        setLoading(false);
      });

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

      {loading ? 
        // <Image source={require('../../resources/loading.gif')} />
        <Text>carregando...</Text>
      :
        <View style={styles.containerButton}>
          <Button title="Entrar" onPress={handleLogar} />
          <Button title="Cadastrar" onPress={() => navigation.navigate('Cadastro')} />
        </View>
      }

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
