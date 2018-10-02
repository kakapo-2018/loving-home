import React from "react";
import {
  ScrollView,
  StyleSheet,
  ImageBackground,
  Image,
  Text,
  Animated,
  TouchableOpacity,
  Platform,
  View,
  Easing,
  Dimensions
} from "react-native";
var { width, height } = Dimensions.get("window");

export default class Play extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      fadeValue: new Animated.Value(0),
      xValue: new Animated.Value(0),
      springValue: new Animated.Value(0.1)
    };

    function cycleAnimation() {
      Animated.sequence([
        Animated.timing(this.state.xValue, {
          toValue: 1,
          duration: 500,
          delay: 1000
        }),
        Animated.timing(this.state.xValue, {
          toValue: 0,
          duration: 500
        })
      ]).start(event => {
        if (event.finished) {
          cycleAnimation();
        }
      });
    }
  }

  _fadeAnimation = () => {
    Animated.timing(this.state.fadeValue, {
      toValue: 1,
      duration: 3000
    }).start();
  };

  _moveAnimation = () => {
    Animated.timing(this.state.xValue, {
      toValue: width - 100,
      duration: Math.random() * 1000,
      easing: Easing.back()
    }).start(() => {
      Animated.delay(Math.random() * 3000);
      Animated.timing(this.state.xValue, {
        toValue: Math.random() * 500,
        duration: Math.random() * 4000,
        easing: Easing.back()
      }).start(() => {
        this._moveAnimation();
      });
    });
  };

  _springAnimation = () => {
    Animated.spring(this.state.springValue, {
      toValue: 1,
      friction: 0.2
    }).start(() => {
      this._moveAnimation();
    });
  };

  _bunnyMovement = () => {
    Animated.spring(this.state.springValue, {
      toValue: 1,
      friction: 0.2
    }).start(() => {
      Animated.timing(this.state.xValue, {
        toValue: Math.random() * 500,
        duration: Math.random() * 4000,
        easing: Easing.back()
      }).start(() => {
        this._moveAnimation();
      });
    });
  };

  static navigationOptions = {
    header: null
  };

  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity onPress={this._moveAnimation}>
          <Animated.Image
            source={require("../assets/images/bunny.png")}
            style={[
              styles.imageView,
              {
                transform: [{ scale: this.state.springValue }],
                alignSelf: "center"
              }
            ]}
          />
        </TouchableOpacity>

        <Animated.View
          style={[
            styles.animationView,
            // { opacity: this.state.fadeValue }
            { left: this.state.xValue }
          ]}
        >
          <TouchableOpacity onPress={this._bunnyMovement}>
            <Image
              style={{ width: 150, height: 150 }}
              source={require("../assets/images/cat.png")}
            />
          </TouchableOpacity>
        </Animated.View>

        {/* <TouchableOpacity style={styles.button} onPress={this._springAnimation}>
          <Text style={styles.buttonText}>Animate</Text>
        </TouchableOpacity> */}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center"
    // alignItems: 'center'
  },
  animationView: {
    width: 150,
    height: 150
  },
  button: {
    backgroundColor: "steelblue",
    height: 40,
    marginTop: 12
  },
  buttonText: {
    color: "white",
    padding: 3
  },
  imageView: {
    width: 150,
    height: 150,
    backgroundColor: "transparent"
  }
});
