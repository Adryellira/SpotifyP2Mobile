import React from 'react';
import { StatusBar } from 'expo-status-bar';
import NavBar from './src/routes/FPSGbottom.routes';

export default function App() {
  return (
    <>
      <StatusBar translucent style="light" />
      <NavBar />
    </>
  );
}
