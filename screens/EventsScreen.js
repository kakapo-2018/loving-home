import React, {Component} from 'react';
import api from '../utils/api'
import { fetchEvents } from '../actions'
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
      fontSize: 20,
      alignItems: 'center',
      justifyContent: 'center',
      margin: 20,
      marginTop: 20,
      width: 200,
      backgroundColor: 'green'
    },
    pageheader: {
      fontSize: 40,
      marginTop: 25
    },
    hidden:{
      height:200,
      width: 600,
      backgroundColor:'green',
      
    }})

 
class EventsScreen extends React.Component {
  constructor(props){
    super(props)

    this.state = {
      hidden: true
    }

    this.expandArticle = this.expandArticle.bind(this)
    this.keyExtractor = this.keyExtractor.bind(this)
  }
  
  static navigationOptions = {
    header: null,
  };

  componentDidMount () {
    this.props.fetchEvents()
  }

  expandArticle () {
    this.setState({
      hidden: !this.state.hidden
    })
  }


  keyExtractor = (item, index) => String(item.id)


  render() {

    return (
      
        
<View style={styles.container}>
<TouchableOpacity onPress={ () => this.expandArticle()}>
  <Text style={styles.pageheader}>Welcome to Events</Text>  
</TouchableOpacity>
<Text style={this.state.hidden ? {height:0} : styles.hidden }>More more more</Text>
<FlatList
  horizontal={true}
  data={this.props.events.EventsCarousel}
  keyExtractor={this.keyExtractor}
  renderItem={({item}) => <Text style={styles.words} ><Image source={require('../assets/images/neko-atsume.jpg')} />{item.headline}</Text>}
/>  
</View>    

    )}}

    function MapStateToProps(state){
      return{
        events: state.events
      }
    }

    function mapDispatchToProps(dispatch){
      return bindActionCreators( { 
        fetchEvents: fetchEvents}, dispatch)

    }
    export default connect(MapStateToProps, mapDispatchToProps)(EventsScreen)


