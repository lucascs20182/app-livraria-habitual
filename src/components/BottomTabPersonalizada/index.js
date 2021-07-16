import React from 'react';

import {
  StyleSheet, Text, View, TouchableOpacity
} from 'react-native';

import { FontAwesome5, Entypo } from '@expo/vector-icons';

export default function BottomTabPersonalizada({ navigation }) {
  return (
    <View style={styles.containerBottomTabPersonalizada}>
      <TouchableOpacity style={styles.bottomTabPersonalizada}
        onPress={() => navigation.navigate('Produtos')}>
        <Entypo name="home" size={30} color="rgb(0, 0, 113)" />
        <Text style={styles.textBottomTabPersonalizada}>Home</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.bottomTabPersonalizada}
        onPress={() => navigation.navigate('Perfil')}>
        <FontAwesome5 name="user-alt" size={24} color="rgb(0, 0, 113)" />
        <Text style={styles.textBottomTabPersonalizada}>Perfil</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.bottomTabPersonalizada}
        onPress={() => navigation.navigate('Carrinho')}>
        <FontAwesome5 name="shopping-cart" size={26} color="rgb(0, 0, 113)" />
        <Text style={styles.textBottomTabPersonalizada}>Carrinho</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  containerBottomTabPersonalizada: {
    flexDirection: 'row',
    width: '90%',
    justifyContent: 'space-around',
    alignItems: 'baseline',
    marginVertical: 15,
    alignSelf: 'center'
  },

  bottomTabPersonalizada: {
    height: 50,
    alignItems: 'center',
    justifyContent: 'space-between'
  },

  textBottomTabPersonalizada: {
    color: '#000071',
    fontWeight: '400',
    fontSize: 14
  }
})
