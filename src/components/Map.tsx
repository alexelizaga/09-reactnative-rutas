import React, { useEffect } from 'react';
import {StyleProp, StyleSheet, ViewStyle} from 'react-native';
import MapView, {Marker} from 'react-native-maps';

import Geolocation from '@react-native-community/geolocation';

interface Props {
  markers?: Marker[];
  style?: StyleProp<ViewStyle>;
}
export const Map = ({style, markers = []}: Props) => {
  useEffect(() => {
    Geolocation.getCurrentPosition(
      info => console.log(info),
      err => console.log({err}),
      {
        enableHighAccuracy: true,
      },
    );
  }, []);

  return (
    <>
      <MapView
        style={[style, styles.map]}
        // provider={PROVIDER_GOOGLE}
        showsUserLocation={true}
        initialRegion={{
          latitude: 37.78825,
          longitude: -122.4324,
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
    </>
  );
};

const styles = StyleSheet.create({
  map: {
    flex: 1,
  },
});
