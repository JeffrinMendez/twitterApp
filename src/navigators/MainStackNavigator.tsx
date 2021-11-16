import { createNativeStackNavigator } from '@react-navigation/native-stack';
import FeedScreen from '../screens/FeedScreen';
import HomeScreen from '../screens/HomeScreen';
import React from 'react';


const Stack = createNativeStackNavigator();

const MainStackNavigator = () => {

    return (
        <Stack.Navigator initialRouteName="HomeScreen">

            <Stack.Screen name="HomeScreen" component={HomeScreen} options={{ title: 'Inicio' }} />
            <Stack.Screen name="FeedScreen" component={FeedScreen} />
        </Stack.Navigator>



    )



}

export default MainStackNavigator