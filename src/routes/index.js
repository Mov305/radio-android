import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import Tabs from './Tabs';
import Drawer from './Drawer.js';

export default function AppNavigation() {
  return (
    <NavigationContainer>
      <Drawer />
    </NavigationContainer>
  );
}
