import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import {PermissionScreen} from '../pages/PermissionScreen';
import {MapScreen} from '../pages/MapScreen';

const Stack = createStackNavigator();

export const Navigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        cardStyle: {
          backgroundColor: 'white',
        },
      }}>
      <Stack.Screen name="MapScreen" component={MapScreen} />
      <Stack.Screen name="PermissionScreen" component={PermissionScreen} />
    </Stack.Navigator>
  );
};
