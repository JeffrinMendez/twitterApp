import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import MainStackNavigator from './src/navigators/MainStackNavigator';
import FeedScreen from './src/screens/FeedScreen';
import HomeScreen from './src/screens/HomeScreen';






export default function App() {
  return (
    <NavigationContainer>
      <MainStackNavigator/>
    </NavigationContainer>
  );
}

