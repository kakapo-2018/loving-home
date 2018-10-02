import React, { Component } from 'react'
import {
      StyleSheet,
      View, Image,
      FlatList,
      Text,
      Animated,
      ImageBackground,
      TouchableOpacity,
      TouchableWithoutFeedback
} from 'react-native'

import ReUse from '../ReUse'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux';
import { fetchCosmetics, updateActiveStoreCarousel, setAllCosmetics, spendMoney } from '../actions';

class TestScreen extends Component {
      state = {
            columns:3,
            animatePress: new Animated.Value(1)
      }

      static navigationOptions = {
            header: null,
          };

      animateIn(){
            Animated.timing(this.state.animatePress,{
                  toValue:0.8,
                  duration:400
            }).start()
      }

      animateOut(){
            Animated.timing(this.state.animatePress,{
                  toValue:1,
                  duration:400
            }).start()
      }

      componentDidMount(){
            this.props.fetchCosmetics()
      }

      render(){
            const {columns} = this.state
            return (
                  <View style = {styles.container}>
                  <ImageBackground style={styles.landing} source={require('../assets/images/store_background.jpg')} resizeMode='cover'>
                  
                  <Text style={styles.pageheader}>${this.props.storeItems.currentCoins}</Text>
                  <FlatList 
                  numColumns = {columns}
                   data = {this.props.storeItems.storeCarousel.cosmetics}
                    renderItem = {({ item }) => {
                        return <TouchableWithoutFeedback 
                              onPressIn={() => {this.props.spendMoney(item.price); this.animateIn()}} 
                              onPressOut = {()=>this.animateOut()}>
                              <Animated.View style = {{margin: 5, width:150, height:100, backgroundColor: 'tomato',
                                    transform:[
                                        {
                                              scale:this.state.animatePress
                                        }  
                                    ]
                        }}>
                              <Image style = {{width:150, height:75}} source={require('../assets/images/cat.png')}/>
                              <Text>{item.name} ${item.price}</Text>
                              </Animated.View>
                              </TouchableWithoutFeedback>
                  }}
                    keyExtractor = {
                          (index) => {return index}
                    }
                    keyExtractor={(item) => item.toString()}
                  />
                  </ImageBackground>
                  </View>
            )
      }
}

function MapStateToProps(state){
  return {
      storeItems: state.store
    }}


function MapDispatchToProps(dispatch){
      return bindActionCreators({
            fetchCosmetics: fetchCosmetics,
            updateActiveStoreCarousel: updateActiveStoreCarousel,
            setAllCosmetics: setAllCosmetics,
            spendMoney: spendMoney
      }, dispatch)
      }

export default connect(MapStateToProps, MapDispatchToProps)(TestScreen)


const styles = StyleSheet.create({
      container: {
            flex:1,
        justifyContent: 'space-between'
            
            
      },
      pageheader: {
            backgroundColor: 'white',
            fontSize: 40,
            marginTop: 25
      },
      landing:{
            flex: 1,
            height: '100%',
            justifyContent: 'center',
            alignItems: 'center'
            
      }
})



// [
//   require('../assets/images/cat.png'),
//   require('../assets/images/dog.png'),
//   require('../assets/images/robot-dev.png'),
//   require('../assets/images/neko-atsume.jpg'),
//   require('../assets/images/robot-prod.png'),
//   require('../assets/images/store_background.jpg'),
//   require('../assets/images/cat.png'),
//   require('../assets/images/robot-dev.png'),
//   require('../assets/images/robot-prod.png')
// ]