// import React, { useState } from 'react';
// import { StyleSheet, View, Text, TextInput, Button } from 'react-native';
// // import styles from "./styles";

// import api from '../../services/api';
// import { cadastrar } from "../../services/api-usuario";

// export default function Cadastro({ navigation }) {
//   const [email, setEmail] = useState('');
//   const [username, setUsername] = useState('');
//   const [senha, setSenha] = useState('');
//   const [nome, setNome] = useState('');
//   const [cpf, setCpf] = useState('');
//   const [cep, setCep] = useState('');
//   const [numero, setNumero] = useState('');
//   const [complemento, setComplemento] = useState('');

//   function handleCadastrar() {
//     if (!email || !username || !senha || !nome || !cpf || !cep || !numero) {
//       alert("Complemento é opcional. Favor, informar todos os demais campos");
//       return;
//     }

//     // remove o header de authorization da rota de cadastro
//     // que não precisa utilizar token
//     delete api.defaults.headers.common["Authorization"];

//     cadastrar(email, username, senha, nome, cpf, cep, numero, complemento)
//     .then((resposta) => {
//       alert("Usuário cadastrado! Faça o login.");
//       navigation.navigate('Login');
//     })
//     .catch((erro) => {
//       alert("Erro! Verifique o console.");
//       console.error(erro);
//     });
    
//   }

//   return (
//     <View style={styles.container}>
//       <View>
//         <View>
//             <Text>Email</Text>
//             <TextInput style={styles.textInput} placeholder="lucascs20182@gmail.com"
//             value={email} onChangeText={e => setEmail(e)} />
//         </View>

//         <View>
//             <Text>Username</Text>
//             <TextInput style={styles.textInput} placeholder="ex.: lucascs20182"
//             value={username} onChangeText={e => setUsername(e)} />
//         </View>

//         <View>
//             <Text>Senha</Text>
//             <TextInput style={styles.textInput} placeholder="*******"
//             secureTextEntry={true} value={senha} onChangeText={e => setSenha(e)} />
//         </View>

//         <View>
//             <Text>Nome</Text>
//             <TextInput style={styles.textInput} placeholder="Lucas Cruz"
//             value={nome} onChangeText={e => setNome(e)} />
//         </View>

//         <View>
//             <Text>CPF</Text>
//             <TextInput style={styles.textInput} placeholder="12671212182"
//             value={cpf} onChangeText={e => setCpf(e)} />
//         </View>

//         <View>
//             <Text>CEP</Text>
//             <TextInput style={styles.textInput} placeholder="25780000"
//             value={cep} onChangeText={e => setCep(e)} />
//         </View>

//         <View>
//             <Text>No. da casa</Text>
//             <TextInput style={styles.textInput} placeholder="102"
//             value={numero} onChangeText={e => setNumero(e)} />
//         </View>

//         <View>
//             <Text>Complemento</Text>
//             <TextInput style={styles.textInput}
//             value={complemento} onChangeText={e => setComplemento(e)} />
//         </View>
//       </View>

//       <View style={styles.containerButton}>
//         <Button title="Cadastrar" onPress={handleCadastrar} />
//         <Button title="Voltar" onPress={() => navigation.navigate('Login')} />
//       </View>
//     </View>
//   );
// }