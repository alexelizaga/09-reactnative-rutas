import React from 'react';
import {StyleProp, StyleSheet, ViewStyle} from 'react-native';
import MapView, {Marker} from 'react-native-maps';

interface Props {
  markers?: Marker[];
  style?: StyleProp<ViewStyle>;
}
export const Map = ({style, markers = []}: Props) => {
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
        {markers.map((marker, index) => (
          <Marker
            key={index}
            coordinate={marker.coordinate}
            title={marker.title}
            description={marker.description}
          />
        ))}
      </MapView>
    </>
  );
};

const styles = StyleSheet.create({
  map: {
    flex: 1,
  },
});
