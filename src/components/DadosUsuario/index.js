import React, { useEffect, useState } from 'react';

import { deleteKeys, getData } from '../../storage';
import { obterDadosDoCliente } from '../../services/api-usuario';

import { View, Text, Image, TouchableOpacity, ActivityIndicator } from 'react-native';

import styles from '../../screens/Perfil/style';

export default function DadosUsuario({ navigation }) {
    const [dados, setDados] = useState({});
    const [isMari, setIsMari] = useState(false);

    useEffect(() => {
        async function prepararDados() {
            const id = await getData('idUsuario');

            obterDadosDoCliente(id)
                .then((resposta) => {
                    
                    // homenagem à nossa amiga
                    if(resposta.data.username === "mari") {
                        setIsMari(true);
                    }

                    setDados(resposta.data);                  
                })
                .catch((erro) => {
                    alert("Erro ao listar dados do usuário! Favor, atualizar o app.");
                    console.log(erro);
                });
        }

        prepararDados();
    }, [])

    function handleLogout() {
        deleteKeys();

        navigation.navigate('Login');
    }

    return (
        <>
            {Object.keys(dados).length !== 0 ?
                <View style={styles.container}>
                    <View style={styles.container}>
                        {console.log(dados)}
                        {console.log(isMari)}
                        <Text style={styles.text}>Perfil</Text>

                        {isMari ? 
                            <Image style={styles.photo} source={require('../../resources/foto-mari.jpeg')} />
                        :
                            <Image style={styles.photo} source={require('../../resources/usuario-sem-foto.png')} />
                        }

                        <Text style={styles.userName}>{dados.nome}</Text>
                        <Text style={styles.userInfo}>E-mail: {dados.email}</Text>
                        <Text style={styles.userInfo}>Username: {dados.username}</Text>
                        <Text style={styles.userInfo}>CPF: {dados.cpf}</Text>
                        <Text style={styles.userInfo}>Endereço: Rua dos Astros, 50, Casa 2,</Text>
                        <Text style={styles.userInfo}>Teresópolis - Rio de Janeiro</Text>
                        <Text style={styles.userInfo}>CEP: 25953-203</Text>

                        <TouchableOpacity onPress={handleLogout}
                            style={styles.containerBotaoEntrar}>
                            <Text style={styles.botaoEntrar}>SAIR</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                :
                <View style={styles.container}>
                    <ActivityIndicator size="large" color="#464646" />
                </View>
            }
        </>
    );
}
