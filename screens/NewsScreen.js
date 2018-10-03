import React, { Component } from 'react';
import { setAllNews, newsAPI, fetchNews, updateNews } from '../actions'
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
    fontSize: 18,
    alignItems: 'center',
    justifyContent: 'center',
    margin: 20,
    marginTop: 20,
    height: 210,
    width: 200,
    backgroundColor: 'lightgreen',
    fontFamily: 'droid-serif-regular'
  },
  pageheader: {
    fontSize: 40,
    marginTop: 25,
    fontFamily: 'droid-serif-regular'
  },
  hidden: {
    width: '100%',
    backgroundColor: 'rgba(0,0,0,0.8)',
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
  }
})


class NewsScreen extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      hidden: true,
      pic: require('../assets/images/pastel-wallpaper.png'),
      newspics: [ require('../assets/images/news/grumpycat.jpg'), require('../assets/images/news/bantrade.jpg'), require('../assets/images/news/kakapo.jpg'), require('../assets/images/news/faircow.jpg'),   require('../assets/images/news/seaworld.jpg')],
      fontLoaded: false
    }

    this.expandArticle = this.expandArticle.bind(this)
    this.keyExtractor = this.keyExtractor.bind(this)
    this.getAllNews = this.getAllNews.bind(this)
    this.findNewsStory = this.findNewsStory.bind(this)
    this.showPic = this.showPic.bind(this)
  }

  static navigationOptions = {
    header: null,
  };

  async componentDidMount() {
    try{
      await Font.loadAsync({
        'droid-serif-regular': require('../assets/fonts/DroidSerif-Regular.ttf'),
      });

      this.setState({ fontLoaded: true });


    } catch (error) {


      console.log('error loading icon fonts', error);


    }
    this.props.fetchNews()
  }

  getAllNews(err, res) {
    //console.log(res)
  }

  findNewsStory() {
    let story = this.props.news.NewsCarousel.find(thing => {
      //console.log(thing)
      return thing.id == this.props.news.ActiveNews.id
    })
    if (story != undefined) {
      return (story)
    }

  }

  showPic(id){
    let pic = this.props.news.NewsCarousel.find(thing => {
      return thing.id == id
    })
    if (pic != undefined){
      console.log('the thing' + pic)
    }

  }
  expandArticle() {
    this.setState({
      hidden: !this.state.hidden
    })
  }


  keyExtractor = (item, index) => String(item.id)


  render() {
    if (!this.state.fontLoaded) {


      return <AppLoading />;


    }
    return (

      <ImageBackground source={this.state.pic} style={{height:'100%'}}>

      <View style={styles.container}>
       
        <TouchableOpacity onPress={() => this.expandArticle()}>
          <Text style={styles.pageheader}>News</Text>
        </TouchableOpacity>
        <ScrollView >
          <View style={this.state.hidden ? { height: 0 } : styles.hidden}>
          <Text style={this.state.hidden ? { height: 0 } : styles.hiddenHeader}>{{...this.findNewsStory()}.headline}</Text>
          <Text style={this.state.hidden ? { height: 0 } : styles.hiddenContent}>{{...this.findNewsStory()}.content}</Text>
          <TouchableOpacity onPress={() => this.expandArticle()}><Image style={this.state.hidden ? { height: 0 } : styles.hiddenImage} source={{uri:'https://www.petmd.com/sites/default/files/petmd-kitten-development.jpg'}} /></TouchableOpacity>
        </View></ScrollView>
        
        <FlatList
          horizontal={true}
          data={this.props.news.NewsCarousel}
          keyExtractor={this.keyExtractor}
          renderItem={({ item }) => 
          <TouchableOpacity onPress={() => {this.expandArticle(); this.props.updateNews(item.id)}}>
          <Text style={styles.words}>
          <Image style={styles.picwrapper} source={this.state.newspics[(item.id)-1]} />
          {item.headline}
          </Text>
          </TouchableOpacity>}
        />

      </View>
      </ImageBackground>
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

