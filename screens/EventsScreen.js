import React, {Component} from 'react';
import api from '../utils/api'
import { fetchEvents, updateEvent } from '../actions'
import {
  Image,
  Platform,
  ScrollView,
  Alert,
  StyleSheet,
  Text,
  FlatList,
  TouchableOpacity,
  View,
  ImageBackground,
} from 'react-native';
import { WebBrowser } from 'expo';
import { MonoText } from '../components/StyledText';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      borderColor: 'black',
      
    },
    words: {
      fontSize: 18,
      alignItems: 'center',
      justifyContent: 'center',
      margin: 20,
      marginTop: 20,
      height: 210,
      width: 200,
      backgroundColor: 'lightblue'
    },
    pageheader: {
      fontSize: 40,
      marginTop: 25
    },
    hidden:{
      width: '100%',
      backgroundColor:'rgba(0,0,0,0.4)'
      
    },
    hiddeninfo:{
      fontSize: 12,
      height: 100
    },
  hiddenHeader: {
    fontSize: 20
  },
  hiddenContent: {
    fontSize: 15
  },
  hiddenImage: {
   height: 100
  },
  picwrapper: {
    width: 1000, 
    height: 500, 
    resizeMode:'contain',
    paddingHorizontal: 20,
    alignItems: 'center',
  },
})

 
class EventsScreen extends React.Component {
  constructor(props){
    super(props)

    this.state = {
      pic: require('../assets/images/pastel-wallpaper.png'), 
      hidden: true,
      eventspics: [ require('../assets/images/events/petsatwork.jpg'), require('../assets/images/events/rehabbunny.png'), require('../assets/images/events/puppywalk.jpg'), require('../assets/images/events/oldcat.jpg'),   require('../assets/images/events/appreciationday.jpg')]
    }

    this.expandArticle = this.expandArticle.bind(this)
    this.keyExtractor = this.keyExtractor.bind(this)
    this.findEventsStory = this.findEventsStory.bind(this)
  }
  
  static navigationOptions = {
    header: null,
  }

  componentDidMount () {
    this.props.fetchEvents()
  }

  expandArticle () {
    this.setState({
      hidden: !this.state.hidden
    })
  }

  findEventsStory() {
 
    let story = this.props.events.EventsCarousel.find(thing => {
      return thing.id == this.props.events.ActiveEvent.id
    })
    if (story != undefined){
    return (story)
    }
    
  }


  keyExtractor = (item, index) => String(item.id)


  render() {

    return (
      
        
<View style={styles.container}>
<ImageBackground source={this.state.pic} style={{height:'100%'}}>

  <Text style={styles.pageheader}>Events</Text>  
  <ScrollView>
    <View style={this.state.hidden ? { height: 0 } : styles.hidden}>
        <Text style={this.state.hidden ? { height: 0 } : styles.hiddenHeader}>{{...this.findEventsStory()}.headline}</Text>
        <Text style={this.state.hidden ? { height: 0 } : styles.hiddeninfo}>{{...this.findEventsStory()}.organisation}, {{...this.findEventsStory()}.location} at {{...this.findEventsStory()}.dateAndTime}</Text>
        <Text style={this.state.hidden ? { height: 0 } : styles.hiddenContent}>{{...this.findEventsStory()}.content}</Text>
        {/* <TouchableOpacity onPress={() => this.expandArticle()}><Image style={this.state.hidden ? { height: 0 } : styles.hiddenImage} source={{uri:'https://www.petmd.com/sites/default/files/petmd-kitten-development.jpg'}} /></TouchableOpacity> */}
    </View>
  </ScrollView>
<FlatList
  horizontal={true}
  data={this.props.events.EventsCarousel}
  keyExtractor={this.keyExtractor}
  renderItem={({item}) => <TouchableOpacity onPress={() => {this.expandArticle(); this.props.updateEvent(item.id)}}><Text style={styles.words}><Image style={styles.picwrapper} source={this.state.eventspics[(item.id)-1]} />{item.headline}</Text></TouchableOpacity>}
/>  
</ImageBackground>
</View>    

    )}}

    function MapStateToProps(state){
      return{
        events: state.events
      }
    }

    function mapDispatchToProps(dispatch){
      return bindActionCreators( { 
        fetchEvents: fetchEvents,
        updateEvent: updateEvent}, dispatch)

    }
    export default connect(MapStateToProps, mapDispatchToProps)(EventsScreen)


