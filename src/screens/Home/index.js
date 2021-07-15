import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import Produtos from '../Produtos';
import Carrinho from '../Carrinho';
import Perfil from '../Perfil';

const { Navigator, Screen } = createBottomTabNavigator();

export default function Home() {
  return (
    <Navigator initialRouteName="Home" tabBarOptions={{ activeTintColor: '#e91e63' }}>
      <Screen
        name="Produtos" component={Produtos}
        options={{
          tabBarIcon: () => (
            <MaterialCommunityIcons name="home" color={"black"} size={30} />
          )
        }}
      />

      <Screen
        name="Carrinho" component={Carrinho}
        options={{
          tabBarIcon: () => (
            <MaterialCommunityIcons name="home" color={"black"} size={30} />
          )
        }}
      />

      <Screen
        name="Perfil" component={Perfil}
        options={{
          tabBarIcon: () => (
            <MaterialCommunityIcons name="home" color={"black"} size={30} />
          )
        }}
      />
    </Navigator>
  );
}
