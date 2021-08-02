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
import YoutubePlayer from 'react-native-youtube-iframe';
import BackBar from '../Component/BackBar';

function DoubleBedRoom(props) {
  return (
    <SafeAreaView>
      <ScrollView>
        <BackBar />
        <ImageBackground
          style={styles.container}
          source={require('../assest/back.jpg')}>
          <View style={styles.main}>
            <YoutubePlayer height={200} play={true} videoId={'Qrt3A4z0ylM'} />
          </View>
        </ImageBackground>
      </ScrollView>
    </SafeAreaView>
  );
}
const win = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    width: win.width,
    height: win.height,
  },
  main: {
    flex: 1,
    flexDirection: 'column',
    marginTop: '60%',
  },
});

export default DoubleBedRoom;
