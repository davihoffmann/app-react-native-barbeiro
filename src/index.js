import React from 'react';
import { StatusBar } from 'react-native';
import Routes from './routes';

export default function Home() {
  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor="#7159c1" />
      <Routes />
    </>
  );
}
