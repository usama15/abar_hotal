import React from 'react';
import {
  Dimensions,
  ImageBackground,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import BackBar from '../Component/BackBar';
import MapView, {PROVIDER_GOOGLE, Marker} from 'react-native-maps';

function Location(props) {
  return (
    <View style={styles.container}>
      {/*<BackBar />*/}
      <MapView
        provider={PROVIDER_GOOGLE} // remove if not using Google Maps
        style={styles.map}
        region={{
          latitude: 25.004294108665256,
          longitude: 55.16972736679409,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}>
        <Marker
          coordinate={{
            latitude: 25.004294108665256,
            longitude: 55.16972736679409,
          }}
          title={'Abar Hotel Apartments'}
        />
      </MapView>
    </View>
  );
}
const win = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    height: '100%',
    width: '100%',
    // justifyContent: 'flex-end',
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
});
export default Location;
