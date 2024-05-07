import React from 'react';
import OrderHistoryScreen from '../screens/OrderHistoryScreen';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { style } from './styles';
import { Common } from '../assets/svg';
import { COLORS } from '../theme/theme';
import Home from '../screens/HomeScreen';
import Favorites from '../screens/Favorites';
import Menu from '../screens/Menu';
import DatePicker from '../components/DatePicker';

const Tabs = createBottomTabNavigator();

const TabNavigator = () => {
  return (
    <Tabs.Navigator
      screenOptions={{
        headerShown: false,
        tabBarHideOnKeyboard: true,
        tabBarShowLabel: false,
        tabBarStyle: style.container,
      }}>
      <Tabs.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({ focused }) => (
            <Common.Home
              name="home"
              fill={
                focused ? COLORS.backgroundSecondary : COLORS.primaryWhiteHex
              }
            />
          ),
        }}
      />
      <Tabs.Screen
        name="Cart"
        component={Menu}
        options={{
          tabBarIcon: ({ focused }) => (
            <Common.Progress
              name="home"
              fill={
                focused ? COLORS.backgroundSecondary : COLORS.primaryWhiteHex
              }
            />
          ),
        }}
      />
      <Tabs.Screen
        name="Favorite"
        component={Favorites}
        options={{
          tabBarIcon: ({ focused }) => (
            <Common.Award
              name="home"
              fill={
                focused ? COLORS.backgroundSecondary : COLORS.primaryWhiteHex
              }
            />
          ),
        }}
      />
      <Tabs.Screen
        name="card"
        component={DatePicker}
        options={{
          tabBarIcon: ({ focused }) => (
            <Common.Profile
              name="home"
              fill={
                focused ? COLORS.backgroundSecondary : COLORS.primaryWhiteHex
              }
            />
          ),
        }}
      />
    </Tabs.Navigator>
  );
};

export default TabNavigator;
