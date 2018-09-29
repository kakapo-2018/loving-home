import React from 'react';
import { 
  ScrollView,
  StyleSheet,
  ImageBackground,
  Image,
  Text
 } from 'react-native';

export default class LinksScreen extends React.Component {
  // static navigationOptions = {
  //   title: 'Links',
  // };
  static navigationOptions = {
    header: null,
  };



  render() {
      return (
          <ImageBackground source={require('../assets/images/backyard.jpg')}
                style={styles.backgroundImage}>
                {/* {this.props.children} */}
            <Image style={{ width: 150, height: 150, top: 20, left: 115}} source={require('../assets/images/cat.png')} />
            <Image style={{ width: 150, height: 150, top: -10, left: 370}} source={require('../assets/images/dog.png')} />
          </ImageBackground>
      )
  }
}


const styles = StyleSheet.create({
  backgroundImage: {
      flex: 1,
      width: '100%',
      height: null,
  }
})