import React from 'react';
import {Text, Dimensions, StyleSheet, View, Image} from 'react-native';
import {SwiperFlatList} from 'react-native-swiper-flatlist';

const Silder = () => (
  <View style={styles.container}>
    <SwiperFlatList autoplay autoplayDelay={3} autoplayLoop index={2}>
      <View style={[styles.child]}>
        <Image style={styles.img} source={require('../assest/slide1.jpeg')} />
      </View>
      <View style={[styles.child]}>
        <Image style={styles.img} source={require('../assest/slide2.jpeg')} />
      </View>
      <View style={[styles.child]}>
        <Image style={styles.img} source={require('../assest/slide3.jpeg')} />
      </View>
      <View style={[styles.child]}>
        <Image style={styles.img} source={require('../assest/slide4.jpeg')} />
      </View>
      <View style={[styles.child]}>
        <Image style={styles.img} source={require('../assest/slide5.jpeg')} />
      </View>
      <View style={[styles.child]}>
        <Image style={styles.img} source={require('../assest/slide6.jpeg')} />
      </View>
      <View style={[styles.child]}>
        <Image
          style={styles.img}
          source={require('../assest/staycation.jpeg')}
        />
      </View>
    </SwiperFlatList>
  </View>
);

const win = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {flex: 1, backgroundColor: 'transparent'},
  child: {width: win.width, height: '100%', marginBottom: '60%'},
  img: {
    width: '90%',
    height: '80%',
    borderRadius: 30,
  },
});

export default Silder;

// import Swiper from 'react-native-swiper';
//
// const styles = StyleSheet.create({
//   wrapper: {},
//   slide1: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: '#9DD6EB',
//   },
//   slide2: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: '#97CAE5',
//   },
//   slide3: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: '#92BBD9',
//   },
//   text: {
//     color: '#fff',
//     fontSize: 30,
//     fontWeight: 'bold',
//   },
// });
//
// export default class SwiperComponent extends React.Component {
//   render() {
//     return (
//       <Swiper
//         style={styles.wrapper}
//         autoplay={true}
//         autoplayTimeout={3}
//         autoplayDirection={true}
//         showsButtons={true}>
//         <View style={styles.slide1}>
//           <Text style={styles.text}>Hello Swiper</Text>
//         </View>
//         <View style={styles.slide2}>
//           <Text style={styles.text}>Beautiful</Text>
//         </View>
//         <View style={styles.slide3}>
//           <Text style={styles.text}>And simple</Text>
//         </View>
//       </Swiper>
//     );
//   }
// }
