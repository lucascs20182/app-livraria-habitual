import React, { useState } from 'react';

import api from '../../services/api';
import { logar } from "../../services/api-usuario";
import { storeData, getData } from '../../storage';

import { FontAwesome5, FontAwesome } from '@expo/vector-icons';

import {
  StyleSheet, View, Text, TextInput, 
  Button, ImageBackground, Image 
} from 'react-native';

export default function Login({ navigation }) {
  const [loading, setLoading] = useState(false);
  const [username, setUsername] = useState('');
  const [senha, setSenha] = useState('');
  const [placeHolderUsername, setPlaceHolderUsername] = useState('Digite seu username');
  const [placeHolderSenha, setPlaceHolderSenha] = useState('Digite sua senha');

  function handleLogar() {
    setLoading(true);

    async function recuperarToken() {
      const token = await getData('token');

      // adiciona novamente o header de authorization
      // removido na tela anterior
      api.defaults.headers.common['Authorization'] = token;
    }

    recuperarToken();

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
    <View style={styles.containerBackground}>
      <ImageBackground style={styles.background}
              source={require('../../resources/background-login.png')} />

      <View style={styles.container}>
        <Image style={styles.logo} source={require('../../resources/logo.png')} />

        <View style={styles.containerLogin}>
          <Text style={styles.tituloLogin}>Login</Text>

          <View style={styles.containerInput}>
            <View style={styles.emLinha}>
              <FontAwesome5 name="user-alt" color="white" size={18}/>
              <TextInput style={styles.textInput} placeholder={placeHolderUsername}
                placeholderTextColor="#fff" value={username} onFocus={e => setPlaceHolderUsername('')}
                onBlur={e => setPlaceHolderUsername('Digite seu username')}
                onChangeText={e => setUsername(e)} />
            </View>
            <View style={styles.linhaBranca}></View>
          </View>

          <View style={styles.containerInput}>
            <View style={styles.emLinha}>
              <FontAwesome name="lock" color="white" size={23}/>
              <TextInput style={styles.textInput} placeholder={placeHolderSenha}
                onFocus={e => setPlaceHolderSenha('')}
                onBlur={e => setPlaceHolderSenha('Digite sua senha')}
                placeholderTextColor="#fff" value={senha} secureTextEntry
                onChangeText={e => setSenha(e)} />
            </View>
            <View style={styles.linhaBranca}></View>
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

      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  containerBackground: {
    flex: 1,
    position: 'relative'
  },

  background: {
    width: '100%', 
    height: '100%',
    position: 'absolute'
  },

  container: {
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'center',
  },

  logo: {
    width: 252,
    height: 49,
  },

  containerLogin: {

  },

  tituloLogin: {
    // fontFamily: 'Inter',
    fontSize: 25,
    lineHeight: 32,
    letterSpacing: 15,
    textTransform: 'uppercase',
    fontWeight: 500,
    color: '#fff',
    alignSelf: 'center',
    marginBottom: 15
  },

  containerInput: {
    marginVertical: 10,
    width: 310
  },

  emLinha: {
    flexDirection: 'row',
    paddingLeft: 5,
  },

  textInput: {
    fontWeight: 400,
    // fontFamily: 'Inter',
    width: 400,
    fontSize: 15,
    lineHeight: 18,
    color: '#fff',
    marginLeft: 7
  },

  linhaBranca: {
    borderBottomWidth: 1,
    borderBottomColor: '#fff',
    width: '100%',
    marginTop: 8
  },

  containerButton: {
    width: 300,
    height: 100,
    justifyContent: 'space-between',
    marginTop: 40
  }
});
