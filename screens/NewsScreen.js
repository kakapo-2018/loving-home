import React, { Component } from 'react';
import api from '../utils/api'
import { setAllNews, newsAPI, fetchNews, updateNews } from '../actions'
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
  hidden: {
    height: 300,
    width: 400,
    backgroundColor: 'green'
  },
  hiddenHeader: {
    fontSize: 20
  },
  hiddenContent: {
    fontSize: 15
  },
  hiddenImage: {
   height: 100
  }
})


class NewsScreen extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      hidden: true,
    }

    this.expandArticle = this.expandArticle.bind(this)
    this.keyExtractor = this.keyExtractor.bind(this)
    this.getAllNews = this.getAllNews.bind(this)
    this.findNewsStory = this.findNewsStory.bind(this)
  }

  static navigationOptions = {
    header: null,
  };

  componentDidMount() {
    this.props.fetchNews()
    
  }

  getAllNews(err, res) {
    console.log(res)
  }

  findNewsStory() {
    // console.log('NEWS', this.props.news.ActiveNews.id)
    // this.props.news.NewsCarousel.map(thing => {
    //   console.log(thing.id)

    // })
    let story = this.props.news.NewsCarousel.find(thing => {
      console.log(thing)
      return thing.id == this.props.news.ActiveNews.id
    })
    if (story != undefined){
    return (story)
    }
    
  }


  // getAllNews(err, news){
  //   this.props.setAllNews(news)
  // console.log("here is news", news)
  // this.setState({
  //   log: news
  // })

  // }

  expandArticle() {
    this.setState({
      hidden: !this.state.hidden
    })
  }


  keyExtractor = (item, index) => String(item.id)


  render() {

    return (

     

      <View style={styles.container}>
       <ImageBackground source={require('../assets/images/pastel-wallpaper.png')} style={{height:'100%'}}>
        <TouchableOpacity onPress={() => this.expandArticle()}>
          <Text style={styles.pageheader}>Welcome to the News</Text>
        </TouchableOpacity>
        {/* <Text style={this.state.hidden ? { height: 0 } : styles.hidden}>{{...this.findNewsStory()}.headline}</Text> */}
        <ScrollView  >
          <View style={this.state.hidden ? { height: 0 } : styles.hidden}>
          <Text style={this.state.hidden ? { height: 0 } : styles.hiddenHeader}>{{...this.findNewsStory()}.headline}</Text>
          <Text style={this.state.hidden ? { height: 0 } : styles.hiddenContent}>{{...this.findNewsStory()}.content}</Text>
          <TouchableOpacity onPress={() => this.expandArticle()}><Image style={this.state.hidden ? { height: 0 } : styles.hiddenImage} source={{uri:'https://www.petmd.com/sites/default/files/petmd-kitten-development.jpg'}} /></TouchableOpacity>
        </View></ScrollView>
        
        <FlatList
          horizontal={true}
          data={this.props.news.NewsCarousel}
          keyExtractor={this.keyExtractor}
          renderItem={({ item }) => <TouchableOpacity onPress={() => {this.expandArticle(); this.props.updateNews(item.id)}}><Text style={styles.words}><Image  source={require('../assets/images/neko-atsume.jpg')} />{item.headline}</Text></TouchableOpacity>}
        />
      </ImageBackground>

      </View>
    )
  }
}

function MapStateToProps(state) {
  return {
    news: state.news
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    setAllNews: setAllNews,
    fetchNews: fetchNews,
    updateNews: updateNews
  }, dispatch)

}
export default connect(MapStateToProps, mapDispatchToProps)(NewsScreen)

