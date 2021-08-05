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
import {Avatar, Button} from 'react-native-paper';

function ContactUs(props) {
  return (
    <SafeAreaView>
      <ScrollView>
        <BackBar />
        <ImageBackground
          style={styles.container}
          source={require('../assest/back.jpg')}>
          <View style={styles.main}>
            <View style={styles.text_view}>
              <Text style={styles.head}>
                Do you have anything in your mind to tell us?
              </Text>
              <Text style={styles.head}>
                Please don't hesitate to get in touch
              </Text>
            </View>
            <Button
              style={styles.btn}
              mode="contained"
              icon="phone"
              onPress={() => {
                Linking.openURL('tel:+97148811999');
              }}>
              +971 4 8811 999
            </Button>
            <Button
              style={styles.btn2}
              mode="contained"
              icon="email"
              onPress={() => {
                Linking.openURL('mailto:info@abarhotals.com');
              }}
              // onPress={launchMailApp}
            >
              info@abarhotals.com
            </Button>
            <TouchableOpacity
              style={styles.area}
              onPress={() => {
                Linking.openURL('google.navigation:q= 25.004294108665256+55.16972736679409');
              }}>
              <Image
                style={styles.img}
                source={require('../assest/map.jpeg')}
              />
            </TouchableOpacity>
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
    alignItems: 'center',
  },
  text_view: {
    marginTop: '20%',
    borderRadius: 10,
    backgroundColor: 'white',
    width: '85%',
    // marginHorizontal: '8%',
    padding: '2%',
  },
  head: {
    fontSize: 15,
    textAlign: 'center',
    color: 'black',
  },
  btn: {
    marginTop: '30%',
    marginHorizontal: '5%',
    borderRadius: 8,
    backgroundColor: '#5171FF',
    width: '50%',
    height: '6%',
    justifyContent: 'center',
  },
  btn2: {
    marginTop: '8%',
    marginHorizontal: '5%',
    borderRadius: 8,
    backgroundColor: '#5171FF',
    width: '60%',
    height: '6%',
    justifyContent: 'center',
  },
  area: {
    width: '80%',
    height: '30%',
    marginTop: '5%',
  },
  img: {
    width: '100%',
    height: '100%',
    borderRadius: 10,
  },
   social: {
    backgroundColor: 'white',
  },
  social_group: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '40%',
    marginTop: '7%',
    // marginLeft: '30%',
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

export default ContactUs;
