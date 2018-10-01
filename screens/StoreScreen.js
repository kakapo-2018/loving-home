import React from 'react';
import { 
  ScrollView,
  StyleSheet,
  ImageBackground
 } from 'react-native';

export default class StoreScreen extends React.Component {
  // static navigationOptions = {
  //   title: 'Links',
  // };

  static navigationOptions = {
   header: null,
 };

  render() {
    return (
      <ImageBackground style={styles.landing} source={require('../assets/images/store_background.jpg')} resizeMode='cover'>

      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  landing:{
    height: '100%'
  }
});