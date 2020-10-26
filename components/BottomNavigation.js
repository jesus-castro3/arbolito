import React from 'react';
import { StyleSheet } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import Home from '../screens/Home';
import Settings from '../screens/Settings';
import UserTrees from '../screens/UserTrees';

import { PALETTE } from '../utils/theme';

const Tab = createBottomTabNavigator();

const Header = ({ navigator }) => {
  return (
    <Tab.Navigator
      tabBarOptions={{
        activeTintColor: PALETTE.white,
        inactiveTintColor: PALETTE.white,
        activeBackgroundColor: PALETTE.green200,
        style: styles.navigator,
        tabStyle: styles.tabs,
        showLabel: false,
      }}
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused }) => {
          let name;
          console.log(route);
          if (route.name === 'Home') {
            name = 'pine-tree-box';
          } else if (route.name === 'UserTrees') {
            name = 'format-list-bulleted-triangle';
          } else if (route.name === 'Settings') {
            name = 'settings';
          }
          return (
            <MaterialCommunityIcons
              name={name}
              size={24}
              color={focused ? PALETTE.white : PALETTE.teal}
            />
          );
        },
      })}
    >
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="UserTrees" component={UserTrees} />
      <Tab.Screen name="Settings" component={Settings} />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  navigator: {
    backgroundColor: PALETTE.green100,
    justifyContent: 'center',
    alignItems: 'center',
    borderTopColor: PALETTE.green200,
    borderTopWidth: 1,
  },
  tabs: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Header;
