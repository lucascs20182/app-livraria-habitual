import React from 'react';

import { deleteKey } from '../../storage';

import { View, Text, Button, Image, TouchableOpacity, } from 'react-native';
import styles from './style';

export default function Perfil({ navigation }) {

    function handleLogout() {
        deleteKey();

        navigation.navigate('Login');
    }

    return (
        <View style={styles.containerBackground}>
            <View style={styles.backgroundBlue}>
                <Image style={styles.logo} source={require('../../resources/logo.png')} />            
                <View style={styles.backgroundWhite}>
                    <View style={styles.container}>                        
                        <Text style={styles.text}>Perfil</Text>
                        <Image style={styles.photo} source={require('../../resources/foto-mari.jpeg')} />
                        <Text style={styles.userName}>Mari Sá</Text>
                        <Text style={styles.userInfo}>E-mail: mari.sa@gmail.com</Text>
                        <Text style={styles.userInfo}>Username: Mari_Sa</Text>
                        <Text style={styles.userInfo}>Senha: ••••</Text>
                        <Text style={styles.userInfo}>CPF: 012.345.678-90</Text>
                        <Text style={styles.userInfo}>Endereço: Rua dos Astros, 50, Casa 2,</Text>
                        <Text style={styles.userInfo}>Teresópolis - Rio de Janeiro</Text>
                        <Text style={styles.userInfo}>CEP: 25953-203</Text>
                        
                        <TouchableOpacity onPress={handleLogout}
                            style={styles.containerBotaoEntrar}>
                            <Text style={styles.botaoEntrar}>SAIR</Text>
                        </TouchableOpacity>
                        
                        {/* <View style={styles.button}>
                            <Button title="Sair" onPress={() => handleLogout()} />
                        </View> */}
                    </View>
                </View>
            </View> 
        </View>
    );
}

// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         justifyContent: 'center',
//         alignItems: 'center',
//     },
// });
