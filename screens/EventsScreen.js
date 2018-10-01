import React from 'react';
import { 
  ScrollView,
  StyleSheet,
  ImageBackground,
  Image,
  Text
 } from 'react-native';
 import { connect } from 'react-redux'

class SettingsScreen extends React.Component {
  // static navigationOptions = {
  //   title: 'app.json',
  // };
  static navigationOptions = {
    header: null,
  };

  

  render() {
    return(
          <Text>{this.props.news.id}</Text>
    )

  }
}

function MapStateToProps(state){
  return{
    news: state.news.ActiveNews
  }
}

export default connect(MapStateToProps)(SettingsScreen)
