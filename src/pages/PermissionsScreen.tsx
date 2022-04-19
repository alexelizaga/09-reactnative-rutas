import React, {useContext} from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';
import {PermisionsContext} from '../context/PermissionsContext';

export const PermissionsScreen = () => {
  const {permissions, askLocationPermision, checkLocationPermision} =
    useContext(PermisionsContext);

  return (
    <View style={styles.container}>
      <Text>PermissionScreen</Text>
      <Button title="Permiso" onPress={askLocationPermision} />
      <Text>{JSON.stringify(permissions, null, 5)}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
