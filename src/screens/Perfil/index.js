import React from 'react';

import { deleteKey } from '../../storage';

import { StyleSheet, View, Text, Button } from 'react-native';

export default function Perfil({ navigation }) {

    function handleLogout() {
        deleteKey();

        navigation.navigate('Login');
    }

    return (
        <View style={styles.container}>
            <Text>perfil</Text>
            <Button title="Logout" onPress={() => handleLogout()} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
});
