import React from 'react';
import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import NewTreeProposal from './screens/modals/NewTreeProposal';
import Main from './screens/Main';

import { PALETTE } from './utils/theme';

const RootStack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <RootStack.Navigator headerShown={false}>
        <RootStack.Screen
          name="Main"
          component={Main}
          options={{ headerShown: false }}
        />
        <RootStack.Screen
          name="NewTreeProposal"
          component={NewTreeProposal}
          options={{
            title: 'Nuevo Arbolito',
          }}
        />
      </RootStack.Navigator>
    </NavigationContainer>
  );
}

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
