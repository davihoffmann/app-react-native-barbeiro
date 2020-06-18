import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Dashboard from '~/pages/Dashboard';
import Profile from '~/pages/Profile';

const AppTab = createBottomTabNavigator();

const AppRoutes = () => (
  <AppTab.Navigator
    tabBarOptions={{
      keyboardHidesTabBar: true,
      activeTintColor: '#fff',
      inactiveTintColor: 'rgba(255, 255, 255, 0.6)',
      style: { backgroundColor: '#8d41a8', borderTopColor: 'transparent' },
    }}
  >
    <AppTab.Screen
      name="Dashboard"
      component={Dashboard}
      options={{
        title: 'Agendamentos',
        // eslint-disable-next-line react/prop-types
        tabBarIcon: ({ color }) => {
          return <Icon name="event" size={20} color={color} />;
        },
      }}
    />

    <AppTab.Screen
      name="Profile"
      component={Profile}
      options={{
        title: 'Meu Perfil',
        // eslint-disable-next-line react/prop-types
        tabBarIcon: ({ color }) => {
          return <Icon name="person" size={20} color={color} />;
        },
      }}
    />
  </AppTab.Navigator>
);

export default AppRoutes;
