import React from 'react';

import { deleteKey } from '../../storage';

import { View, Text, Button, Image, TouchableOpacity, } from 'react-native';
import styles from '../../util/containerLogado';

import BottomTabPersonalizada from '../../components/BottomTabPersonalizada';
import ItensCarrinho from '../../components/ItensCarrinho';
import Produtos from '../../components/ListaProdutos';
import Carrinho from '../../components/ItensCarrinho';

export default function Perfil({ navigation }) {

    // function handleLogout() {
    //     deleteKey();

    //     navigation.navigate('Login');
    // }

    return (
        <View style={styles.containerBackground}>
            <View style={styles.backgroundBlue}>
                <Image style={styles.logo} source={require('../../resources/logo.png')} />            
                <View style={styles.backgroundWhite}>
                    <View style={styles.container}>                        
                        <ItensCarrinho />

                    </View>
                </View>
            </View> 
            <BottomTabPersonalizada navigation={navigation} />
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
