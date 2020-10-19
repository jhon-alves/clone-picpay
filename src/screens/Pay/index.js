import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

import MainScreen from './pages/Main';
import LocationsScreen from './pages/Locations';
import StoreScreen from './pages/Store';

const Tab = createMaterialTopTabNavigator();

export default function Pay() {
  return (
    <Tab.Navigator
      tabBarOptions={{
        style: {
          backgroundColor: '#000',
        },
        activeTintColor: '#fff',
        inactiveTintColor: '#92929c',
      }}
    >
      <Tab.Screen
        name="Main"
        component={MainScreen}
        options={{ title: 'Principais' }}
      />
      <Tab.Screen
        name="Locations"
        component={LocationsScreen}
        options={{ title: 'Locais' }}
      />
      <Tab.Screen
        name="Store"
        component={StoreScreen}
        options={{ title: 'Store' }}
      />
    </Tab.Navigator >
  );
}