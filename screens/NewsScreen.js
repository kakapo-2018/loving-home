import React, {Component} from 'react';
import api from '../utils/api'
import { setAllNews, newsAPI, fetchNews } from '../actions'
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

 
class NewsScreen extends React.Component {
  constructor(props){
    super(props)

    this.state = {
      hidden: true,
      log: 'friend'
    }

    this.expandArticle = this.expandArticle.bind(this)
    this.keyExtractor = this.keyExtractor.bind(this)
    this.getAllNews = this.getAllNews.bind(this)
  }
  
  static navigationOptions = {
    header: null,
  };

  componentDidMount(){
    this.props.fetchNews()
  }

 getAllNews(err, res){
  console.log(res)
 }
 

  // getAllNews(err, news){
  //   this.props.setAllNews(news)
    // console.log("here is news", news)
    // this.setState({
    //   log: news
    // })

  // }

  expandArticle(){
    this.setState({
      hidden: !this.state.hidden
    })
  }


  keyExtractor = (item, index) => String(item.id)


  render() {

    return (
      
        
<View style={styles.container}>
<TouchableOpacity onPress={ () => this.expandArticle()}>
  <Text style={styles.pageheader}>Welcome to the News</Text>  
</TouchableOpacity>
<Text style={this.state.hidden ? {height:0} : styles.hidden }>More more more</Text>
<FlatList
  horizontal={true}
  data={this.props.news.NewsCarousel}
  keyExtractor={this.keyExtractor}
  renderItem={({item}) => <Text style={styles.words} ><Image source={require('../assets/images/neko-atsume.jpg')} />{item.headline}</Text>}
/>  
</View>    

    )}}

    function MapStateToProps(state){
      return{
        news: state.news
      }
    }

    function mapDispatchToProps(dispatch){
      return bindActionCreators( {
        setAllNews: setAllNews, 
        fetchNews: fetchNews}, dispatch)

    }
    export default connect(MapStateToProps, mapDispatchToProps)(NewsScreen)


  // _maybeRenderDevelopmentModeWarning() {
  //   if (__DEV__) {
  //     const learnMoreButton = (
  //       <Text onPress={this._handleLearnMorePress} style={styles.helpLinkText}>
  //         Learn more
  //       </Text>
  //     );

  //     return (
  //       <Text style={styles.developmentModeText}>
  //         Development mode is enabled, your app will be slower but you can use useful development
  //         tools. {learnMoreButton}
  //       </Text>
  //     );
  //   } else {
  //     return (
  //       <Text style={styles.developmentModeText}>
  //         You are not in development mode, your app will run at full speed.
  //       </Text>
  //     );
  //   }
  // }

  // _handleLearnMorePress = () => {
  //   WebBrowser.openBrowserAsync('https://docs.expo.io/versions/latest/guides/development-mode');
  // };

//   _handleHelpPress = () => {
//     WebBrowser.openBrowserAsync(
//       'https://docs.expo.io/versions/latest/guides/up-and-running.html#can-t-see-your-changes'
//     );
//   };
// }

// const styles = StyleSheet.create({
//   backgroundimage: {
//     flex: 1,
//     backgroundColor: '#fff',
//   }})
//   developmentModeText: {
//     marginBottom: 20,
//     color: 'rgba(0,0,0,0.4)',
//     fontSize: 14,
//     lineHeight: 19,
//     textAlign: 'center',
//   },
//   contentContainer: {
//     paddingTop: 30,
//   },
//   welcomeContainer: {
//     alignItems: 'center',
//     marginTop: 10,
//     marginBottom: 20,
//   },
//   welcomeImage: {
//     width: 100,
//     height: 80,
//     resizeMode: 'contain',
//     marginTop: 3,
//     marginLeft: -10,
//   },
//   getStartedContainer: {
//     alignItems: 'center',
//     marginHorizontal: 50,
//   },
//   homeScreenFilename: {
//     marginVertical: 7,
//   },
//   codeHighlightText: {
//     color: 'rgba(96,100,109, 0.8)',
//   },
//   codeHighlightContainer: {
//     backgroundColor: 'rgba(0,0,0,0.05)',
//     borderRadius: 3,
//     paddingHorizontal: 4,
//   },
//   getStartedText: {
//     fontSize: 17,
//     color: 'rgba(96,100,109, 1)',
//     lineHeight: 24,
//     textAlign: 'center',
//   },
//   tabBarInfoContainer: {
//     position: 'absolute',
//     bottom: 0,
//     left: 0,
//     right: 0,
//     ...Platform.select({
//       ios: {
//         shadowColor: 'black',
//         shadowOffset: { height: -3 },
//         shadowOpacity: 0.1,
//         shadowRadius: 3,
//       },
//       android: {
//         elevation: 20,
//       },
//     }),
//     alignItems: 'center',
//     backgroundColor: '#fbfbfb',
//     paddingVertical: 20,
//   },
//   tabBarInfoText: {
//     fontSize: 17,
//     color: 'rgba(96,100,109, 1)',
//     textAlign: 'center',
//   },
//   navigationFilename: {
//     marginTop: 5,
//   },
//   helpContainer: {
//     marginTop: 15,
//     alignItems: 'center',
//   },
//   helpLink: {
//     paddingVertical: 15,
//   },
//   helpLinkText: {
//     fontSize: 14,
//     color: '#2e78b7',
//   },
// });
