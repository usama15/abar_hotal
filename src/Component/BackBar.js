import * as React from 'react';
import {Appbar} from 'react-native-paper';
import {Image, Linking} from 'react-native';
import ScaledSheet from 'react-native-scaled-sheet';
import {useNavigation} from '@react-navigation/native';

const BackBar = () => {
  const _goBack = () => console.log('Went back');
  const navigation = useNavigation();

  return (
    <Appbar.Header theme={{colors: {primary: '#3C3C3C'}}}>
      <Appbar.BackAction onPress={() => navigation.goBack()} />
      <Image
        style={styles.logo}
        source={require('../assest/Webp.net-resizeimage.png')}
      />
      <Appbar.Action
        icon="web"
        onPress={() => {
          Linking.openURL('https://abarhotels.com/');
        }}
      />
    </Appbar.Header>
  );
};

const styles = ScaledSheet.create({
  logo: {
    width: '70%',
    height: '80%',
    marginLeft: '3%',
    marginRight: '2%',
  },
});

export default BackBar;
