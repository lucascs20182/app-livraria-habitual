import React, { useState } from 'react';

import api from '../../services/api';
import { logar } from "../../services/api-usuario";
import { storeData, getData } from '../../storage';

import { FontAwesome5, FontAwesome } from '@expo/vector-icons';

import styles from './styles';

import {
  View, Text, TextInput, 
  ActivityIndicator, TouchableOpacity, ImageBackground, Image 
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
      setLoading(false);
      return;
    }

    logar(username, senha)
      .then((resposta) => {
        const { Authorization, idUsuario } = resposta.data;

        storeData('token', Authorization);
        storeData('idUsuario', idUsuario);

        setLoading(false);

        navigation.navigate('Produtos');
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

          <TouchableOpacity onPress={() => navigation.navigate('Cadastro')}
            style={styles.containerTextoCadastro}>
              <Text style={styles.textoCadastro}>Não tem conta? Cadastre-se</Text>
          </TouchableOpacity>

          {loading ? 
            <ActivityIndicator size="large" color="#fff" />
          :
            <TouchableOpacity onPress={handleLogar}
              style={styles.containerBotaoEntrar}>
                <Text style={styles.botaoEntrar}>Entrar</Text>
            </TouchableOpacity>
          }
        </View>

      </View>
    </View>
  );
}
