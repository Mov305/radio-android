import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import Tabs from './Tabs';
import Stacks from './Stacks';

export default function AppNavigation() {
  return (
    <NavigationContainer>
      <Stacks />
    </NavigationContainer>
  );
}
