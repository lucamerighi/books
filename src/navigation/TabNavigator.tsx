import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';
import { StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import Audiobooks from '../pages/Audiobooks';
import Categories from '../pages/Categories';
import Favorites from '../pages/Favorites';
import Home from '../pages/Home';
import Profile from '../pages/Profile';

const Tab = createBottomTabNavigator();

export default function TabNavigator() {
    return (
        <Tab.Navigator tabBarOptions={{ showLabel: false }}>
            <Tab.Screen
                name='Home'
                component={Home}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <Icon name={focused ? 'home' : 'home-outline'} size={25} />
                    ),
                }}
            />
            <Tab.Screen
                name='Categories'
                component={Categories}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <Icon name={focused ? 'poll-box' : 'poll-box-outline'} size={25} />
                    ),
                }}
            />
            <Tab.Screen
                name='Audiobooks'
                component={Audiobooks}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <Icon name={focused ? 'microphone' : 'microphone-outline'} size={25} />
                    ),
                }}
            />
            <Tab.Screen
                name='Favorites'
                component={Favorites}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <Icon name={focused ? 'bookmark' : 'bookmark-outline'} size={25} />
                    ),
                }}
            />
            <Tab.Screen
                name='Profile'
                component={Profile}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <Icon name={focused ? 'account' : 'account-outline'} size={25} />
                    ),
                }}
            />
        </Tab.Navigator>
    );
}

const styles = StyleSheet.create({});
