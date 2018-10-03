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
 
  wrapper:{
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'stretch'
  },


  charitywrapper: {
    width: 400, 
    height: 400, 
    resizeMode:'contain',
    paddingHorizontal: 20,
    alignItems: 'center',
  },

  checkboxwrapper: {
    width:700,
    height:700,
    alignItems: "center",
    borderColor: "blue"
  }


});

class CharitiesScreen extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      hidden: true,
      arr: [require('../assets/images/charities/spca.png'), require('../assets/images/charities/huha.jpg'), require('../assets/images/charities/uhars.png')],
      checked: false
    };

    this.showMission = this.showMission.bind(this);
    this.showPic = this.showPic.bind(this)
    this.keyExtractor = this.keyExtractor.bind(this);
  }

  static navigationOptions = {
    header: null
  };

  componentDidMount() {
    this.props.fetchCharities();
  }

  showPic(id){
    let pic = this.props.charities.charities.find(thing => {
      return thing.id == id
    })
    if (pic != undefined){
      console.log('charitiy', pic)
    // return require(`../assets${png}`)
    }

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
      <ImageBackground source={require('../assets/images/pastel-wallpaper.png')} style={{height:'100%'}}>
      <View style={styles.container}>
 
          {/* <Text style={styles.pageheader}>Support Your Charities</Text> */}

    <FlatList
          horizontal={true}
          data={this.props.charities.Charities}
          keyExtractor={this.keyExtractor}
          renderItem={({ item }) => <Text>{item.charityName}, {item.logo}
          <Image source={item.logo}/></Text>}
        />


         {/* {this.props.charities.charities.map(charity => {
          console.log(charity)
            return <Image key={charity} source={require('../assets/images/charities/spca.png')} style={{height:'50%'}} />
              
          })} */}
     {this.props.charities.charities.map(char => {
       console.log(char)
           return <Text>{char}</Text>
    })} 


         <View style={{flex:1, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'stretch'}}>

          <View>
          <TouchableOpacity 
            onPress={() => this.showMission()}>
          <Text>
          <Image style={styles.charitywrapper} source={require('../assets/images/charities/huha.jpg')} />
          </Text>
          <CheckBox title='support'
          checked={this.state.checked} /><Text>Support</Text>
          </TouchableOpacity>
          </View>

          <View>
          <TouchableOpacity 
            onPress={() => this.showMission()}>
          <Text>
          <Image style={styles.charitywrapper} source={require('../assets/images/charities/kitteninn.png')} />
          </Text>
          <CheckBox 
          center
          checked={this.state.checked} />
          </TouchableOpacity>
          </View>

          <View>
          <TouchableOpacity 
            onPress={() => this.showMission()}>
          <Text>
          <Image style={styles.charitywrapper} source={require('../assets/images/charities/petrescue.png')} />
          </Text>
          <CheckBox title='support'
          checked={this.state.checked} /><Text>Support</Text>
          </TouchableOpacity>
          </View>

        </View>

<View style={{flex:1, flexDirection: 'row'}}>
 
          <View>
          <TouchableOpacity 
            onPress={() => this.showMission()}>
          <Text>
          <Image  style={styles.charitywrapper} source={require('../assets/images/charities/spca.png')} />
          </Text>
          <CheckBox title='support'
          checked={this.state.checked} /><Text>Support</Text>
          </TouchableOpacity>
          </View>

          <View>
          <TouchableOpacity 
            onPress={() => this.showMission()}>
          <Text>
          <Image style={styles.charitywrapper} source={require('../assets/images/charities/uhars.png')} />
          </Text>
          <CheckBox
          checked={this.state.checked} /><Text>Support</Text>
          </TouchableOpacity>
        </View>

          <View>
          <TouchableOpacity 
            onPress={() => this.showMission()}>
          <Text>
          <Image style={styles.charitywrapper} source={require('../assets/images/charities/wcpl.png')} />
          </Text>

         
          <CheckBox title='support'
          checked={this.state.checked} /><Text>Support</Text>
          </TouchableOpacity>
         </View>
         

  

           {/* <Image source={require('../assets/images/charities/huha.jpg')}/> */}
          </View>
       
         {/*  {this.props.charities.charities.map(charity => {
            return <Image source={require(charity.logo)} />
          })} */}
      </View>
          </ImageBackground>
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
