import React, { Component } from "react";
import api from "../utils/api";
import { fetchCharities, updateActiveCharities } from "../actions";
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
  CheckBox,
  Button,
  ImageBackground
} from "react-native";
// import { CheckBox } from 'react-native-elements'
import { WebBrowser } from "expo";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    borderColor: "black",
    justifyContent: "space-evenly"
  },
  pageheader: {
    fontSize: 30,
    marginTop: 21
  },
  wrapper: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'stretch'
  },
  charitywrapper: {
    width: 400,
    height: 400,
    resizeMode: 'contain',
    paddingHorizontal: 20,
    alignItems: 'center',
  },
  checkboxwrapper: {
    width: 700,
    height: 700,
    alignItems: "center",
    borderColor: "blue"
  },
  picwrapper: {
    width: 90,
    height: 90,
    resizeMode: 'contain',
    paddingHorizontal: 2,
    alignItems: 'center',
  }
});

class CharitiesScreen extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      hidden: true,
      pic: require('../assets/images/charitybackground.png'),
      charitypics: [require('../assets/images/charities/spca.png'), require('../assets/images/charities/huha.jpg'), require('../assets/images/charities/wcpl.png'), require('../assets/images/charities/petrescue.png'),
      require('../assets/images/charities/uhars.png'), require('../assets/images/charities/kitteninn.png')],
      checked: false
    };

    this.showMission = this.showMission.bind(this);
    this.keyExtractor = this.keyExtractor.bind(this);
    // this.findMission = this.findMission.bind(this);
  }

  static navigationOptions = {
    header: null
  };

  componentDidMount() {
    this.props.fetchCharities();
  }

  keyExtractor = (item, index) => String(item.id);

  // findMission(id) {
  //   let mission = this.props.charities.Charities.find(charityMission => {
  //     console.log('hjer', charityMission)
  //     return charityMission.id == id
  //   })
  //   return mission
  // }

  showMission() {
    this.setState({
      hidden: !this.state.hidden
    });
    console.log(this.state.hidden)
  }

  render() {
    return (
      <ImageBackground source={this.state.pic} style={{ width: '100%', height: '100%' }}>
        <View style={styles.container}>

          <Text style={styles.pageheader}>Support Your Charities</Text>

          <FlatList
            numColumns={3}
            data={this.props.charities.Charities}
            keyExtractor={this.keyExtractor}
            renderItem={({ item }) =>
              <View>
                <View style={{ width: 180, margin: 1 }}>
                  <Image style={styles.picwrapper} source={this.state.charitypics[(item.id) - 1]} />
                  <View style={{ flexDirection: 'row' }}>
                    <CheckBox checked={false} />
                    <Text style={{ fontSize: 9, paddingTop: 10 }}>{item.charityName}</Text>
                  </View>
                </View>
              </View>}
          />

        </View>
      </ImageBackground>
    )
  }
}

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
export default connect(MapStateToProps, mapDispatchToProps)(CharitiesScreen)
