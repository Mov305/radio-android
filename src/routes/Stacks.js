import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Home from '../Screens/Home';
import Profile from '../Screens/Profile';
import Library from '../Screens/Library';
import Onboarding from '../Screens/Onboarding';
import Player from '../Screens/Player';

const Stack = createStackNavigator();

export default function Stacks() {
  return (
    <Stack.Navigator initialRouteName="Onboarding">
      <Stack.Screen
        name="Main"
        component={Home}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Profile"
        component={Profile}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Onboarding"
        component={Onboarding}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Library"
        component={Library}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Player"
        component={Player}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
}
