import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';

import SignIn from '~/pages/SignIn';
import SignUp from '~/pages/SignUp';

const AuthStack = createStackNavigator();

const AuthRoutes = () => (
  <AuthStack.Navigator mode="modal" headerMode="screen">
    <AuthStack.Screen
      options={{
        title: 'Login',
        headerTransparent: true,
        headerTitleStyle: { color: '#fff' },
      }}
      name="SignIn"
      component={SignIn}
    />
    <AuthStack.Screen
      options={{
        title: 'Criar Conta',
        headerTransparent: true,
        headerBackTitle: 'Voltar',
        headerTitleStyle: { color: '#fff' },
        headerBackTitleStyle: { color: '#fff' },
      }}
      name="SignUp"
      component={SignUp}
    />
  </AuthStack.Navigator>
);

export default AuthRoutes;
