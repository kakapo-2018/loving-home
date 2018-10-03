import React  from 'react';
import { fetchEvents, updateEvent } from '../actions'
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  FlatList,
  TouchableOpacity,
  View,
  ImageBackground,
} from 'react-native';
import { AppLoading, Font } from 'expo';
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
      fontSize: 17,
      alignItems: 'center',
      justifyContent: 'center',
      margin: 20,
      marginTop: 20,
      height: 210,
      width: 200,
      backgroundColor: 'lightblue',
      fontFamily: 'droid-serif-regular'
    },
    pageheader: {
      fontSize: 40,
      marginTop: 25,
      fontFamily: 'droid-serif-regular'
    },
    hidden:{
      width: '100%',
      backgroundColor:'rgba(0,0,0,0.8)'
    },
    hiddeninfo:{
      fontSize: 12,
      height: 100,
      padding: 5,
      fontFamily: 'droid-serif-regular',
      color: 'white'
    },
  hiddenHeader: {
    fontSize: 20,
    textDecorationLine: 'underline',
    paddingLeft: 5,
    color: 'white'
  },
  hiddenContent: {
    fontSize: 15,
    padding: 5,
    fontFamily: 'droid-serif-regular',
    color: 'white'
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
      fontLoaded: false,
      eventspics: [ require('../assets/images/events/petsatwork.jpg'), require('../assets/images/events/rehabbunny.png'), require('../assets/images/events/puppywalk.jpg'), require('../assets/images/events/oldcat.jpg'),   require('../assets/images/events/appreciationday.jpg')]
    }

    this.expandArticle = this.expandArticle.bind(this)
    this.keyExtractor = this.keyExtractor.bind(this)
    this.findEventsStory = this.findEventsStory.bind(this)
  }
  
  static navigationOptions = {
    header: null,
  }

  async componentDidMount () {
    try{
      await Font.loadAsync({
        'droid-serif-regular': require('../assets/fonts/DroidSerif-Regular.ttf'),
      });

      this.setState({ fontLoaded: true });


    } catch (error) {


      console.log('error loading icon fonts', error);


    }
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
    if (!this.state.fontLoaded) {


      return <AppLoading />;


    }
    return (
      <ImageBackground source={this.state.pic} style={{height:'100%'}}>
        
<View style={styles.container}>


  <Text style={styles.pageheader}>Events</Text>  
  <ScrollView>
    <View style={this.state.hidden ? { height: 0 } : styles.hidden}>
        <Text style={this.state.hidden ? { height: 0 } : styles.hiddenHeader}>{{...this.findEventsStory()}.headline}</Text>
        <Text style={this.state.hidden ? { height: 0 } : styles.hiddeninfo}>{{...this.findEventsStory()}.organisation}, {{...this.findEventsStory()}.location} at {{...this.findEventsStory()}.dateAndTime}</Text>
        <Text style={this.state.hidden ? { height: 0 } : styles.hiddenContent}>{{...this.findEventsStory()}.content}</Text>
    </View>
  </ScrollView>
<FlatList
  horizontal={true}
  data={this.props.events.EventsCarousel}
  keyExtractor={this.keyExtractor}
  renderItem={({item}) => <TouchableOpacity onPress={() => {this.expandArticle(); this.props.updateEvent(item.id)}}><Text style={styles.words}><Image style={styles.picwrapper} source={this.state.eventspics[(item.id)-1]} />{item.headline}</Text></TouchableOpacity>}
/>  

</View>    
</ImageBackground>

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


