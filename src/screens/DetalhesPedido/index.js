import React from 'react';

import { View, Image } from 'react-native';
import styles from '../../util/containerDeslogado';

// import BottomTabPersonalizada from '../../components/BottomTabPersonalizada';
import InfosDetalhesPedido from '../../components/InfosDetalhesPedido';

export default function Perfil({ navigation }) {
    return (
        <View style={styles.containerBackground}>
            <View style={styles.backgroundBlue}>
                <Image style={styles.logo} source={require('../../resources/logo.png')} />            
                <View style={styles.backgroundWhite}>
                    <View style={styles.container}>                        
                        <InfosDetalhesPedido navigation={navigation} />

                    </View>
                </View>
            </View> 
            {/* <BottomTabPersonalizada navigation={navigation} /> */}
        </View>
    );
}
