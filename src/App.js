import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { useSelector } from 'react-redux';

import AuthRoutes from './routes/auth.routes';
import AppRoutes from './routes/app.routes';

export default function App() {
  const signed = useSelector((state) => state.auth.signed);

  return (
    <NavigationContainer>
      {signed ? <AppRoutes /> : <AuthRoutes />}
    </NavigationContainer>
  );
}
