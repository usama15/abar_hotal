/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import type {Node} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import Splash from './src/screens/Splash';
import SingleBedRoom from './src/screens/SingleBedRoom';
import DoubleBedRoom from './src/screens/DoubleBedRoom';
import Studio from './src/screens/Studio';
import Staycation from './src/screens/Staycation';
import Home from './src/screens/Home';
import Location from './src/Component/Location';
import About from './src/screens/About';
import ContactUs from './src/screens/ContactUs';
import GulCafe from './src/screens/GulCafe';
import OtherAmenites from './src/screens/OtherAmenites';

const App: () => Node = () => {
  const Stack = createStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Splash">
        <Stack.Screen
          name="Splash"
          component={Splash}
          options={{headerMode: 'none', headerShown: false}}
        />
        <Stack.Screen
          name="SingleBedRoom"
          component={SingleBedRoom}
          options={{headerMode: 'none', headerShown: false}}
        />
        <Stack.Screen
          name="DoubleBedRoom"
          component={DoubleBedRoom}
          options={{headerTitle: false, headerShown: false}}
        />
        <Stack.Screen
          name="Studio"
          component={Studio}
          options={{headerMode: 'none', headerShown: false}}
        />
        <Stack.Screen
          name="Staycation"
          component={Staycation}
          options={{headerMode: 'none', headerShown: false}}
        />
        <Stack.Screen
          name="Home"
          component={Home}
          options={{headerMode: 'none', headerShown: false}}
        />
        <Stack.Screen
          name="Location"
          component={Location}
          options={{headerMode: 'none', headerShown: false}}
        />
        <Stack.Screen
          name="About"
          component={About}
          options={{headerMode: 'none', headerShown: false}}
        />
        <Stack.Screen
          name="ContactUs"
          component={ContactUs}
          options={{headerMode: 'none', headerShown: false}}
        />
        <Stack.Screen
          name="GulCafe"
          component={GulCafe}
          options={{headerMode: 'none', headerShown: false}}
        />
        <Stack.Screen
          name="Other"
          component={OtherAmenites}
          options={{headerMode: 'none', headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
