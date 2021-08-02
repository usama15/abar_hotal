import React from 'react';
import {
  Dimensions,
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
  ImageBackground,
} from 'react-native';
import BackBar from '../Component/BackBar';

function Staycation(props) {
  return (
    <SafeAreaView>
      <ScrollView>
        <BackBar />
        <ImageBackground
          style={styles.container}
          source={require('../assest/back.jpg')}>
          <View style={styles.main}>
            <Image
              style={styles.img}
              resizeMode="stretch"
              source={require('../assest/staycation.jpeg')}
            />
          </View>
        </ImageBackground>
      </ScrollView>
    </SafeAreaView>
  );
}
const win = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    width: win.width,
    height: win.height,
  },
  main: {
    flex: 1,
  },
  img: {
    marginTop:'20%',
    width: win.width,
    height: '70%',
  },
});

export default Staycation;
