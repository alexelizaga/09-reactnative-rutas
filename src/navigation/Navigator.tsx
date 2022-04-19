import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import {PermissionsScreen} from '../pages/PermissionsScreen';
import {MapScreen} from '../pages/MapScreen';

const Stack = createStackNavigator();

export const Navigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="PermissionScreen"
      screenOptions={{
        headerShown: false,
        cardStyle: {
          backgroundColor: 'white',
        },
      }}>
      <Stack.Screen name="MapScreen" component={MapScreen} />
      <Stack.Screen name="PermissionScreen" component={PermissionsScreen} />
    </Stack.Navigator>
  );
};
