import React from 'react';
import {StyleProp, StyleSheet, ViewStyle} from 'react-native';
import MapView, {Marker} from 'react-native-maps';

import {useLocation} from '../hooks/useLocation';
import {LoadingScreen} from '../pages/LoadingScreen';
import {Fab} from './Fab';

interface Props {
  markers?: Marker[];
  style?: StyleProp<ViewStyle>;
}
export const Map = ({style}: Props) => {
  const {hasLocation, initialPosition} = useLocation();

  if (!hasLocation) {
    return <LoadingScreen />;
  }
  return (
    <>
      <MapView
        style={[style, styles.map]}
        // provider={PROVIDER_GOOGLE}
        showsUserLocation={true}
        initialRegion={{
          latitude: initialPosition.latitude,
          longitude: initialPosition.longitude,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}>
        {/* <Marker
          image={require('../assets/custom-marker.png')}
          coordinate={{
            latitude: 37.78825,
            longitude: -122.4324,
          }}
          title="Mi casa"
          description="Piso de dos habitaciones"
        /> */}
      </MapView>

      <Fab
        iconName="star-outline"
        onPress={() => console.log('Hola Fab')}
        style={styles.fab}
      />
    </>
  );
};

const styles = StyleSheet.create({
  map: {
    flex: 1,
  },
  fab: {
    position: 'absolute',
    bottom: 20,
    right: 20,
  },
});
