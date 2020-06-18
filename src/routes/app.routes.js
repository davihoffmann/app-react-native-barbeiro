import React from 'react';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Dashboard from '~/pages/Dashboard';

const AppTab = createBottomTabNavigator();

const AppRoutes = () => (
  <AppTab.Navigator>
    <AppTab.Screen name="Dashboard" component={Dashboard} />
  </AppTab.Navigator>
);

export default AppRoutes;
