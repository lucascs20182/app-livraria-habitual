import React from 'react';

import { View, Image } from 'react-native';
import styles from '../../util/containerLogado';

import BottomTabPersonalizada from '../../components/BottomTabPersonalizada';
import ItensCarrinho from '../../components/ItensCarrinho';

export default function Perfil({ navigation }) {
    return (
        <View style={styles.containerBackground}>
            <View style={styles.backgroundBlue}>
                <Image style={styles.logo} source={require('../../resources/logo.png')} />            
                <View style={styles.backgroundWhite}>
                    <View style={styles.container}>                        
                        <ItensCarrinho navigation={navigation} />
                    </View>
                </View>
            </View> 
            <BottomTabPersonalizada navigation={navigation} />
        </View>
    );
}
