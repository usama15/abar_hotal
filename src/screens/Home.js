import React from 'react';
import {
  Image,
  ImageBackground,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Dimensions,
  Linking,
} from 'react-native';
import ScaledSheet from 'react-native-scaled-sheet';
import {Button, Modal, Portal, Provider, Avatar} from 'react-native-paper';
import Silder from '../Component/Silder';
import AppBar from '../Component/AppBar';
import YoutubePlayer from 'react-native-youtube-iframe';
import {useNavigation} from '@react-navigation/native';

function Home(props) {
  const win = Dimensions.get('window');
  const navigation = useNavigation();
  return (
    <SafeAreaView>
      <ScrollView>
        <ImageBackground
          source={require('../assest/back.jpg')}
          resizeMode="cover"
          style={{width: null, height: null,}}>
          <View style={[styles.container]}>
            <AppBar />
            <View style={[styles.slid,{aspectRatio:1,}]}>
              <Silder />
            </View>
            <View style={[styles.main_btn,]}>
              <Button
                style={styles.btn}
                mode="contained"
                icon="calendar-check-outline"
                onPress={() => {
                  Linking.openURL('https://abarhotels.com/');
                }}>
                Booking
              </Button>
              <Button
                style={[styles.btn1]}
                mode="contained"
                icon="map-marker"
                onPress={() => console.log('press')}>
                Location
              </Button>
            </View>
            <View style={styles.btn_group}>
              <TouchableOpacity
                onPress={() => navigation.navigate('SingleBedRoom')}>
                <View style={styles.tab}>
                  <Image
                    style={styles.img}
                    source={require('../assest/single.jpeg')}
                  />
                  <Text style={styles.text1}>Single BedRoom</Text>
                  <Text style={styles.text1}>Apartment</Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => navigation.navigate('DoubleBedRoom')}>
                <View style={styles.tab}>
                  <Image
                    style={styles.img}
                    source={require('../assest/double.jpeg')}
                  />
                  <Text style={styles.text1}>Two BedRoom </Text>
                  <Text style={styles.text1}>Apartment</Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => navigation.navigate('Studio')}>
                <View style={styles.tab}>
                  <Image
                    style={styles.img}
                    source={require('../assest/studio.jpeg')}
                  />
                  <Text style={styles.text1}>Studio </Text>
                  <Text style={styles.text1}>Apartment</Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => navigation.navigate('Staycation')}>
                <View style={styles.tab}>
                  <Image
                    style={styles.img}
                    source={require('../assest/single.jpeg')}
                  />
                  <Text style={styles.text1}>Staycation </Text>
                  <Text style={styles.text1}>Offers</Text>
                </View>
              </TouchableOpacity>
            </View>
            <View style={styles.btn_group1}>
              <TouchableOpacity
                onPress={() => {
                  Linking.openURL('https://gulcafe.com/');
                }}>
                <View style={styles.tab1}>
                  <Image
                    style={styles.img}
                    source={require('../assest/gul1.jpeg')}
                  />
                  <Text style={styles.text1}>GUL CAFE</Text>
                  <Text style={styles.text1}>& RESTAURENT</Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity>
                <View style={styles.tab1}>
                  <Image
                    style={styles.img}
                    source={require('../assest/about.png')}
                  />
                  <Text style={styles.text1}>ABOUT </Text>
                  <Text style={styles.text1}>ABAR HOTEL</Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity>
                <View style={styles.tab1}>
                  <Image
                    style={styles.img}
                    source={require('../assest/other.jpeg')}
                  />
                  <Text style={styles.text1}>OTHER </Text>
                  <Text style={styles.text1}>AMENITES</Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => {
                  Linking.openURL('https://abarhotels.com/contact-us/');
                }}>
                <View style={styles.tab1}>
                  <Image
                    style={styles.img}
                    source={require('../assest/contact.jpeg')}
                  />
                  <Text style={styles.text1}>CONTACT </Text>
                  <Text style={styles.text1}>US NOW</Text>
                </View>
              </TouchableOpacity>
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
            <Text style={[styles.foo,]}>
              2021 ABAR HOTEL APARTMENT LLC. ALL RIGHT RESERED
            </Text>
          </View>
        </ImageBackground>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = ScaledSheet.create({
  container: {
    flex: 1,
  },
  slid: {
    width: '90%',
    marginLeft: '5%',
    marginTop: '7%',
    marginBottom: '4%',
  },
  div: {
    marginTop: '60%',
  },
  image: {
    justifyContent: 'center',
  },
  btn: {
    marginHorizontal: '5%',
    borderRadius: 8,
    backgroundColor: '#5171FF',
    width: '40%',
    // position: 'relative',
    // flex:1,
  },
  btn1: {
    marginHorizontal: '5%',
    borderRadius: 8,
    backgroundColor: '#5171FF',
    width: '40%',
    // position: 'relative',
    // flex:1,
  },
  main_btn: {
    flex: 1,
    flexDirection: 'row',
    marginTop:'-15%',
    // position: 'relative',
  },
  btn_group: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: '5%',
  },
  btn_group1: {
    flexDirection: 'row',
    marginBottom: '5%',
    justifyContent: 'space-between',
    marginTop: '6%',
  },
  img: {
    width: 80,
    height: 60,
    marginLeft: '5.5%',
    borderRadius: 6,
    marginTop: '3%',
    backgroundColor: '#3C3C3C',
  },
  tab: {
    width: 90,
    height: 100,
    borderRadius: 10,
    backgroundColor: 'whitesmoke',
    marginTop: '7%',
  },
  tab1: {
    width: 90,
    height: 100,
    borderRadius: 10,
    backgroundColor: 'whitesmoke',
    marginTop: '5%',
  },
  text1: {
    textAlign: 'center',
    fontSize: 10,
    marginTop: '2%',
  },
  social: {
    backgroundColor: 'white',
  },
  social_group: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '40%',
    marginTop: '3%',
    marginLeft: '30%',
    marginBottom: '5%',
  },
  foo: {
    color: 'white',
    textAlign: 'center',
    // position: 'relative',
    marginBottom: '15%',
    marginTop: '5%',
  },
});

export default Home;
