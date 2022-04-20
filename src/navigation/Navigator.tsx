import React, {useContext} from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import {PermissionsScreen} from '../pages/PermissionsScreen';
import {MapScreen} from '../pages/MapScreen';
import {PermisionsContext} from '../context/PermissionsContext';
import {LoadingScreen} from '../pages/LoadingScreen';

const Stack = createStackNavigator();

export const Navigator = () => {
  const {permissions} = useContext(PermisionsContext);

  if (permissions.locationStatus === 'unavailable') {
    return <LoadingScreen />;
  }

  return (
    <Stack.Navigator
      initialRouteName="PermissionScreen"
      screenOptions={{
        headerShown: false,
        cardStyle: {
          backgroundColor: 'white',
        },
      }}>
      {permissions.locationStatus === 'granted' ? (
        <Stack.Screen name="MapScreen" component={MapScreen} />
      ) : (
        <Stack.Screen name="PermissionScreen" component={PermissionsScreen} />
      )}
    </Stack.Navigator>
  );
};
