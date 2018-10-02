import React, { Component } from "react";
import api from "../utils/api";
import { fetchCharities } from "../actions";
import {
  Image,
  Platform,
  ScrollView,
  Alert,
  StyleSheet,
  Text,
  Overlay,
  FlatList,
  TouchableOpacity,
  View,
  ImageBackground,
  CheckBox
} from "react-native";
import { WebBrowser } from "expo";
import { MonoText } from "../components/StyledText";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    borderColor: "black"
  },
  words: {
    fontSize: 15,
    alignItems: "center",
    justifyContent: "center",
    margin: 20,
    marginTop: 20,
    width: 200,
    backgroundColor: "green"
  },
  pageheader: {
    fontSize: 20,
    marginTop: 25
  },
  hidden: {
    height: 200,
    width: 200
  },
  infoholder: {
    width: 200,
    height:200
  },
  mission:{
    fontSize: 12
  },
  overlay: {
    flex: 1,
    position: 'absolute',
    left: 0,
    top: 0,
    opacity: 0.3,
    backgroundColor: 'black',
    width: '100%'
  }
});

class CharitiesScreen extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      hidden: true,
      hi: 'hi'
    };

    this.showMission = this.showMission.bind(this);
    this.keyExtractor = this.keyExtractor.bind(this);
  }

  static navigationOptions = {
    header: null
  };

  componentDidMount() {
    this.props.fetchCharities();
  }

  showMission () {
    this.setState({
      hidden: !this.state.hidden,
      hi: 'hi'
    });
    console.log(this.state.hidden)
  }

  keyExtractor = (item, index) => String(item.id);


  render() {
    return (
      <View style={styles.container}>
<View style={[styles.overlay, { height: 360}]} />
          <Text style={styles.pageheader}>Select your Charities</Text>
          <ScrollView contentContainerStyle={styles.contentContainer}>
          
          <TouchableOpacity 
            onPress={() => this.showMission()}>

          <View style={styles.hidden}>
          
          <Text style={!this.state.hidden ? { height: 0 } : styles.hidden}><Image source={require('../assets/images/charities/huha.jpg')}/></Text>

          </View>
          </TouchableOpacity>

          
          </ScrollView>
       
         
      </View>
    )}}
  


function MapStateToProps(state) {
  return {
    charities: state.charities
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    {
      fetchCharities: fetchCharities
    },
    dispatch
  )
}
export default connect(MapStateToProps,mapDispatchToProps)(CharitiesScreen)
