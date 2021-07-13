import React, { useState } from 'react';
import { StyleSheet, View, Text, TextInput, Button } from 'react-native';

export default function Cadastro({ navigation }) {
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [senha, setSenha] = useState('');
  const [nome, setNome] = useState('');
  const [cpf, setCpf] = useState('');
  const [telefone, setTelefone] = useState('');
  const [dataNascimento, setDataNascimento] = useState('');
  const [cep, setCep] = useState('');
  const [numero, setNumero] = useState('');
  const [complemento, setComplemento] = useState('');

  function handleCadastrar() {
    console.log(email, username, senha, nome, cpf,
        telefone, dataNascimento, cep, numero, complemento);

    navigation.navigate('Home');
  }

  return (
    <View style={styles.container}>
      <View>
        <View>
            <Text>Email</Text>
            <TextInput style={styles.textInput} placeholder="lucascs20182@gmail.com"
            value={email} onChangeText={e => setEmail(e)} />
        </View>

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

        <View>
            <Text>Nome</Text>
            <TextInput style={styles.textInput} placeholder="*******"
            secureTextEntry={true} value={nome} onChangeText={e => setNome(e)} />
        </View>
      </View>

      <View style={styles.containerButton}>
        <Button title="Cadastrar" onPress={handleCadastrar} />
        <Button title="Voltar" onPress={() => navigation.navigate('Login')} />
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
