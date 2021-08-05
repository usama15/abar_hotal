import React from 'react';
import {
  Dimensions,
  Image,
  ImageBackground,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import BackBar from '../Component/BackBar';
import YoutubePlayer from 'react-native-youtube-iframe';
import {Modal, Portal, Provider} from 'react-native-paper';

function GulCafe(props) {
  const [visibleImage1, setVisibleImage1] = React.useState(false);
  const [visibleImage2, setVisibleImage2] = React.useState(false);
  const [visibleImage3, setVisibleImage3] = React.useState(false);
  const [visibleImage4, setVisibleImage4] = React.useState(false);
  const [visibleImage5, setVisibleImage5] = React.useState(false);
  const [visibleImage6, setVisibleImage6] = React.useState(false);


  const showImage1 = () => setVisibleImage1(true);
  const hideImage1 = () => setVisibleImage1(false);
  const showImage2 = () => setVisibleImage2(true);
  const hideImage2 = () => setVisibleImage2(false);
  const showImage3 = () => setVisibleImage3(true);
  const hideImage3 = () => setVisibleImage3(false);
  const showImage4 = () => setVisibleImage4(true);
  const hideImage4 = () => setVisibleImage4(false);
  const showImage5 = () => setVisibleImage5(true);
  const hideImage5 = () => setVisibleImage5(false);
  const showImage6 = () => setVisibleImage6(true);
  const hideImage6 = () => setVisibleImage6(false);
  const containerStyle = {backgroundColor: 'white', padding: 20};
  return (
    <SafeAreaView>
      <ScrollView>
        <BackBar />
        <ImageBackground
          style={styles.container}
          resizeMode="cover"
          source={require('../assest/back.jpg')}>
          <View style={styles.main}>
            <TouchableOpacity onPress={showImage1} style={styles.img1}>
              <Image
                style={styles.img}
                // resizeMode="contain"
                source={require('../assest/gul0.jpg')}
              />
            </TouchableOpacity>
            <TouchableOpacity onPress={showImage2} style={styles.img2}>
              <Image
                style={styles.img}
                // resizeMode="contain"
                source={require('../assest/gul2.jpg')}
              />
            </TouchableOpacity>
            <TouchableOpacity onPress={showImage3} style={styles.img3}>
              <Image
                style={styles.img}
                // resizeMode="contain"
                source={require('../assest/gul3.jpg')}
              />
            </TouchableOpacity>
          </View>

          <View style={styles.vid}>
            <YoutubePlayer
              mute={true}
              height={300}
              play={false}
              videoId={'TmrwVxKl2Eo'}
            />
          </View>
          <View style={styles.video}>
            <YoutubePlayer
              mute={true}
              height={300}
              play={false}
              videoId={'p7swQMBb2QE'}
            />
          </View>
          <View style={styles.main2}>
            <TouchableOpacity onPress={showImage4} style={styles.img1}>
              <Image
                style={styles.img}
                // resizeMode="contain"
                source={require('../assest/gul4.jpg')}
              />
            </TouchableOpacity>
            <TouchableOpacity onPress={showImage5} style={styles.img2}>
              <Image
                style={styles.img}
                // resizeMode="contain"
                source={require('../assest/gul5.jpg')}
              />
            </TouchableOpacity>
            <TouchableOpacity onPress={showImage6} style={styles.img3}>
              <Image
                style={styles.img}
                // resizeMode="contain"
                source={require('../assest/gul6.jpg')}
              />
            </TouchableOpacity>
          </View>
        </ImageBackground>
        <Provider>
          <Portal>
            <Modal
              visible={visibleImage1}
              onDismiss={hideImage1}
              contentContainerStyle={containerStyle}>
              <Image
                style={styles.image}
                source={require('../assest/gul0.jpg')}
              />
            </Modal>
          </Portal>
        </Provider>
        <Provider>
          <Portal>
            <Modal
              visible={visibleImage2}
              onDismiss={hideImage2}
              contentContainerStyle={containerStyle}>
              <Image
                style={styles.image}
                source={require('../assest/gul2.jpg')}
              />
            </Modal>
          </Portal>
        </Provider>
        <Provider>
          <Portal>
            <Modal
              visible={visibleImage3}
              onDismiss={hideImage3}
              contentContainerStyle={containerStyle}>
              <Image
                style={styles.image}
                source={require('../assest/gul3.jpg')}
              />
            </Modal>
          </Portal>
        </Provider>
        <Provider>
          <Portal>
            <Modal
              visible={visibleImage4}
              onDismiss={hideImage4}
              contentContainerStyle={containerStyle}>
              <Image
                style={styles.image}
                source={require('../assest/gul4.jpg')}
              />
            </Modal>
          </Portal>
        </Provider>
        <Provider>
          <Portal>
            <Modal
              visible={visibleImage5}
              onDismiss={hideImage5}
              contentContainerStyle={containerStyle}>
              <Image
                style={styles.image}
                source={require('../assest/gul5.jpg')}
              />
            </Modal>
          </Portal>
        </Provider>
         <Provider>
          <Portal>
            <Modal
              visible={visibleImage6}
              onDismiss={hideImage6}
              contentContainerStyle={containerStyle}>
              <Image
                style={styles.image}
                source={require('../assest/gul6.jpg')}
              />
            </Modal>
          </Portal>
        </Provider>
      </ScrollView>
    </SafeAreaView>
  );
}
const win = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    width: win.width,
    height: win.height,
    // marginBottom:'40%',
  },
  main: {
    flexDirection: 'row',
    marginTop: '3%',
    justifyContent: 'space-between',
    marginBottom: 0,
  },
  main2: {
    flexDirection: 'row',
    // marginTop: '-15%',
    justifyContent: 'space-between',
    marginBottom: 0,
  },
  img1: {
    width: '30%',
    height: '40%',
    marginHorizontal: '1%',
  },
  img2: {
    width: '30%',
    height: '40%',
    marginHorizontal: '1%',
  },
  img3: {
    width: '30%',
    height: '40%',
    marginHorizontal: '1%',
  },
  img: {
    borderRadius: 10,
    width: '100%',
    height: '100%',
  },
  vid: {
    marginTop: '-40%',
    width: '90%',
    marginHorizontal: '5%',
    marginBottom: '-20%',
  },
  video: {
    width: '90%',
    marginHorizontal: '5%',
    marginBottom: '-15%',
  },
  image: {
    width: '100%',
    height: '70%',
  },
});

export default GulCafe;
