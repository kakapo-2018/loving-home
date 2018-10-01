import React from 'react';
import {
  ScrollView,
  StyleSheet,
  ImageBackground,
  Image,
  Text,
  Animated,
  TouchableOpacity,
  Platform,
  View
} from 'react-native';

export default class GardenScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      fadeValue: new Animated.Value(0)

    }
  }
  static navigationOptions = {
    header: null,
  };



  render() {
    return (
      <ImageBackground source={require('../assets/images/backyard.jpg')}
        style={styles.backgroundImage}>
        {/* {this.props.children} */}
        <Image style={{ width: 150, height: 150, top: 20, left: 115 }} source={require('../assets/images/cat.png')} />
        <Image style={{ width: 150, height: 150, top: -10, left: 370 }} source={require('../assets/images/dog.png')} />

        <View style={styles.container}>
          <Animated.View style={[styles.animationView, { opacity: this.state.fadeValue }]}>

          </Animated.View>

          <TouchableOpacity style={styles.button}
            onPress={this._fadeAnimation}>
            <Text>Animate</Text>
          </TouchableOpacity>




        </View>

      </ImageBackground>
    )
  }
}


const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    width: '100%',
    height: null,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  animationView: {
    width: 400,
    height: 400,
    backgroundColor: 'skyblue'
  }
})