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
      arr: ['../assets/images/charities/spca.png', '../assets/images/charities/huha', '../assets/images/charities/uhars.png']
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
      hidden: !this.state.hidden
    });
    console.log(this.state.hidden)
  }

  keyExtractor = (item, index) => String(item.id);
 


  render() {
    return (
      <View style={styles.container}>

          <Text style={styles.pageheader}>Select your Charities brah</Text>
          <ScrollView contentContainerStyle={styles.contentContainer}>


          
          <TouchableOpacity 
            onPress={() => this.showMission()}>
          <View style={styles.hidden}>
          <Text style={!this.state.hidden ? { height: 0 } : styles.hidden}>

          {/* {this.state.arr.map(charity => {
            console.log(charity)
            return <Image key={charity} source={require(charity)} style={{width: 200, height: 200}}/>
                  
              
       
          })} */}

           {/* <Image source={require('../assets/images/charities/huha.jpg')}/> */}
          
          </Text>
          </View>
          </TouchableOpacity>


          </ScrollView>
       
         {/*  {this.props.charities.charities.map(charity => {
            return <Image source={require(charity.logo)} />
          })} */}
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
