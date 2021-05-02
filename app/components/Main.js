import React from 'react'
import { View, Text } from 'react-native'
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import FeedScreen from './Main/Feed';
import SearchScreen from './Main/Search';
import ProfileScreen from './Main/Profile';

const Tab = createMaterialBottomTabNavigator();

const Main = () => {
    return (
        <Tab.Navigator
            initialRouteName="Feed"
            labeled={false}
            tabBarOptions={{
                activeTintColor: 'blue',
            }}
        >
            <Tab.Screen
                name="Feed"
                component={FeedScreen}
                options={{
                tabBarIcon: ({ color, size }) => (
                    <MaterialCommunityIcons name="home" color={color} size={26} />
                ),
                }}
            />
            <Tab.Screen
                name="Search"
                component={SearchScreen}
                options={{
                tabBarIcon: ({ color, size }) => (
                    <MaterialCommunityIcons name="magnify" color={color} size={26} />
                ),
                }}
            />
            <Tab.Screen
                name="Profile"
                component={ProfileScreen}
                options={{
                tabBarIcon: ({ color, size }) => (
                    <MaterialCommunityIcons name="account" color={color} size={26} />
                ),
                }}
            />
        </Tab.Navigator>
    )
}

export default Main
