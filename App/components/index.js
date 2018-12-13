/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {

  StyleSheet,
  Image,
  Text,
  TouchableOpacity,
  View
} from 'react-native';
import { createBottomTabNavigator, createAppContainer } from 'react-navigation';
import Home from './home';
import Messages from './messages';
import Profile from './profile';
import Icon from 'react-native-vector-icons/Ionicons';
  
const TabNavigator = createBottomTabNavigator({
    Home: Home,
    Messages: Messages,
    Profile : Profile
  },
  {
    defaultNavigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, horizontal, tintColor }) => {
        const { routeName } = navigation.state;
        let iconName;
        if (routeName === 'Home') {
          iconName = `ios-home`;
        } else if (routeName === 'Messages') {
          iconName = `ios-heart`;
        }else if (routeName === 'Profile') {
          iconName = `ios-person`;
        }

        // You can return any component that you like here! We usually use an
        // icon component from react-native-vector-icons
        return <Icon name={iconName} color="#4F8EF7" />
      },
    }),
    tabBarOptions: {
      activeTintColor: 'tomato',
      inactiveTintColor: 'gray',
    },
  }
  );

  


  export default createAppContainer(TabNavigator);