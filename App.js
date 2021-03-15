import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import AppNavigator from './app/Navigation/AppNavigator';
import { Audio } from 'expo-av';
export default function App() {
  return (
    <NavigationContainer>
      <AppNavigator />
    </NavigationContainer>
  );
};
