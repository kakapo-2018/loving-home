import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';

import TabBarIcon from '../components/TabBarIcon';
import GardenScreen from '../screens/GardenScreen'
import NewsScreen from '../screens/NewsScreen';
import EventsScreen from '../screens/EventsScreen';
import StoreScreen from '../screens/StoreScreen';

const NewsStack = createStackNavigator({
  News: NewsScreen,
});

NewsStack.navigationOptions = {
  tabBarLabel: 'News',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={
        Platform.OS === 'ios'
          ? `ios-information-circle${focused ? '' : '-outline'}`
          : 'md-information-circle'
      }
    />
  )
};

const GardenStack = createStackNavigator({
  Garden: GardenScreen,
});

GardenStack.navigationOptions = {
  tabBarLabel: 'Garden',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === 'ios' ? `ios-link${focused ? '' : '-outline'}` : 'md-link'}
    />
  )
};

const EventsStack = createStackNavigator({
  Events: EventsScreen,
});

EventsStack.navigationOptions = {
  tabBarLabel: 'Events',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === 'ios' ? `ios-options${focused ? '' : '-outline'}` : 'md-options'}
    />
  )
};

const StoreStack = createStackNavigator({
  Store: StoreScreen,
});

StoreStack.navigationOptions = {
  tabBarLabel: 'Store',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={
        Platform.OS === 'ios'
          ? `ios-cart${focused ? '' : '-outline'}`
          : 'md-cart'
      }
    />
  ),
};



export default createBottomTabNavigator(
  {
  GardenStack,
  NewsStack,
  EventsStack,
  StoreStack
},{
tabBarOptions: {
  activeTintColor: '#FFFFFF',
  inactiveTintColor: '#FFFFFF',
  style: {
    backgroundColor: 'rgba(177, 223, 231, 0.9)'
  }}
});
