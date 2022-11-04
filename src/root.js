import React from 'react';
import AppNavigation from './routes';
import StateContext from './lib/stateContext';

export default function Root() {
  return (
    <StateContext>
      <AppNavigation />
    </StateContext>
  );
}
