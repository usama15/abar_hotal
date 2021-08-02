import React from 'react';
import {
  Dimensions,
  Image,
  ImageBackground,
  Linking,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import BackBar from '../Component/BackBar';
import {Avatar} from 'react-native-paper';

function About(props) {
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
              source={require('../assest/slide1.jpeg')}
            />
          </View>
          <View style={styles.text_view}>
            <Text style={styles.head}>About ABAR HOTAL APARTMENTS</Text>
            <Text style={styles.text}>
              Abar Hotel Apartments, is Dubai’s latest & most unique luxury
              Hotel Apartments, established in 2021 in the heart of Dubai
              Investment Park. Featuring 103 fully furnished Studios, One &
              Two-Bedroom apartments, catering to both Short & Long-term guests,
              visiting Dubai for business or leisure simultaneously. With the
              ultra-modern amenities & well-trained staff, we can meet all your
              needs & requirements throughout your stay, & make it a memorable
              one.
            </Text>
          </View>
          <View style={styles.social_group}>
            <TouchableOpacity
              onPress={() => {
                Linking.openURL(
                  'https://www.facebook.com/Abar-Hotel-Apartments-102955015319473/?ref=pages_you_manage',
                );
              }}>
              <Avatar.Icon size={32} icon="facebook" style={styles.social} />
            </TouchableOpacity>
            <TouchableOpacity>
              <Avatar.Icon size={32} icon="twitter" style={styles.social} />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                Linking.openURL('https://www.instagram.com/abarhotel/');
              }}>
              <Avatar.Icon size={32} icon="instagram" style={styles.social} />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                Linking.openURL(
                  'https://www.youtube.com/channel/UCltQa_wMq3Hl2_nCWHQSATg',
                );
              }}>
              <Avatar.Icon size={32} icon="youtube" style={styles.social} />
            </TouchableOpacity>
          </View>
          <Text style={[styles.foo]}>
            2021 ABAR HOTEL APARTMENT LLC. ALL RIGHT RESERED
          </Text>
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
    marginBottom: '-40%',
  },
  img: {
    // flex:1,
    width: '90%',
    height: '50%',
    marginTop: '10%',
    marginHorizontal: '5%',
    borderRadius: 10,
  },
  head: {
    marginTop: '2%',
    fontSize: 22,
    textAlign: 'center',
    color: 'white',
    padding: 5,
  },
  text: {
    color: 'white',
    textAlign: 'center',
    lineHeight: 20,
    padding: 25,
  },
  text_view: {
    borderRadius: 10,
    backgroundColor: '#3C3C3C',
    width: '95%',
    marginHorizontal: '2%',
  },
  social: {
    backgroundColor: 'white',
  },
  social_group: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '40%',
    marginTop: '7%',
    marginLeft: '30%',
    marginBottom: '2%',
  },
  foo: {
    color: 'white',
    textAlign: 'center',
    // position: 'relative',
    marginBottom: '5%',
    marginTop: '5%',
  },
});

export default About;
