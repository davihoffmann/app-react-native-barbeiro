import React from 'react';
import PropTypes from 'prop-types';
import { TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

import { createStackNavigator } from '@react-navigation/stack';

import SelectProvider from '~/pages/Agendamento/SelectProvider';
import SelectDateTime from '~/pages/Agendamento/SelectDateTime';
import Confirm from '~/pages/Agendamento/Confirm';

const AgendamentoStack = createStackNavigator();

const AgendamentoRoutes = ({ navigation }) => (
  <AgendamentoStack.Navigator
    screenOptions={{
      headerTransparent: true,
      headerBackTitle: 'Voltar',
      headerTitleStyle: { color: '#fff' },
      headerBackTitleStyle: { color: '#fff' },
      headerLeftContainerStyle: {
        marginLeft: 15,
      },
    }}
  >
    <AgendamentoStack.Screen
      options={{
        title: 'Selecionar Barbeiro',
        headerLeft: () => (
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('Dashboard');
            }}
          >
            <Icon name="chevron-left" size={28} color="#fff" />
          </TouchableOpacity>
        ),
      }}
      name="SelectProvider"
      component={SelectProvider}
    />

    <AgendamentoStack.Screen
      options={{
        title: 'Selecionar Horário',
        headerLeft: () => (
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('SelectProvider');
            }}
          >
            <Icon name="chevron-left" size={28} color="#fff" />
          </TouchableOpacity>
        ),
      }}
      name="SelectDateTime"
      component={SelectDateTime}
    />

    <AgendamentoStack.Screen
      options={{
        title: 'Confirmar Agendamento',
        headerLeft: () => (
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('SelectDateTime');
            }}
          >
            <Icon name="chevron-left" size={28} color="#fff" />
          </TouchableOpacity>
        ),
      }}
      name="Confirm"
      component={Confirm}
    />
  </AgendamentoStack.Navigator>
);

export default AgendamentoRoutes;

AgendamentoRoutes.propTypes = {
  navigation: PropTypes.oneOfType([PropTypes.object, PropTypes.array])
    .isRequired,
};
