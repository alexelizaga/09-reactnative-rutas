import React, {useContext} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {BlackButton} from '../components/BlackButton';
import {PermisionsContext} from '../context/PermissionsContext';

export const PermissionsScreen = () => {
  const {permissions, askLocationPermision} = useContext(PermisionsContext);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        Es necesario el uso del GPS para utilizar esta aplciación
      </Text>
      <BlackButton title="Permiso" onPress={askLocationPermision} />
      <Text style={styles.permissionStatus}>
        {JSON.stringify(permissions, null, 5)}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    width: 250,
    fontSize: 18,
    textAlign: 'center',
    marginBottom: 20,
  },
  permissionStatus: {
    position: 'absolute',
    bottom: 50,
    fontSize: 16,
  },
});
