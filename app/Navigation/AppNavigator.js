//import liraries
import React, { Component } from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import AudioList from '../screens/AudioList';
import Player from '../screens/Player';
import Options from '../screens/Options';
import { MaterialIcons,MaterialCommunityIcons ,Ionicons } from '@expo/vector-icons'; //website is https://icons.expo.fyi/
const Tab = createBottomTabNavigator();


const AppNavigator = () => {
    return (
        <Tab.Navigator>
            <Tab.Screen name = 'AudioList' component={AudioList} options = {{
                    tabBarIcon: ({color,size}) => (
                            <MaterialIcons name="headset" size={size} color={color} />),
                }} />
            <Tab.Screen name = 'Player' component={Player} options = {{
                    tabBarIcon: ({color,size}) => (
                            <MaterialCommunityIcons name="record-player" size={size} color={color} />),
                }} />
            <Tab.Screen name = 'Options' component={Options} options = {{
                    tabBarIcon: ({color,size}) => (
                            <Ionicons name="options" size={size} color={color} />),
                }}
            
            />
        </Tab.Navigator>
    );
};
export default AppNavigator;
