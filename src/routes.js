import React from 'react';
import { StatusBar } from 'expo-status-bar';

import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Login from './screens/Login';
import Cadastro from './screens/Cadastro';
import Produtos from './screens/Produtos';
import DetalhesPedido from './screens/DetalhesPedido';
import Carrinho from './screens/Carrinho';
import Perfil from './screens/Perfil';

const { Navigator, Screen } = createStackNavigator();

export default function Routes({ logado }) {
  return (
      <NavigationContainer>
        <StatusBar style="auto" />
        <Navigator headerMode initialRouteName={logado ? "Produtos" : "Login"}>
            <Screen name="Login" component={Login} />
            <Screen name="Cadastro" component={Cadastro} />
            <Screen name="Produtos" component={Produtos} />
            <Screen name="DetalhesPedido" component={DetalhesPedido} />
            <Screen name="Carrinho" component={Carrinho} />
            <Screen name="Perfil" component={Perfil} />
        </Navigator>
      </NavigationContainer>
  );
}
