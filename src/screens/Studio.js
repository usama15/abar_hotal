import React from 'react';
import {
  Dimensions,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
  ImageBackground,
} from 'react-native';
import YoutubePlayer from 'react-native-youtube-iframe';
import BackBar from '../Component/BackBar';

function Studio(props) {
  return (
    <SafeAreaView>
      <ScrollView>
        <BackBar />
        <ImageBackground
          style={styles.container}
          source={require('../assest/back.jpg')}>
          <View style={styles.main}>
            <YoutubePlayer height={200} play={true} videoId={'nX9GqTCKsoM'} />
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

export default Studio;
