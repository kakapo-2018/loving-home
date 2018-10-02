import React, { Component } from 'react'
import {
      StyleSheet,
      View, Image,
      FlatList,
      Text,
      ImageBackground
} from 'react-native'

import ReUse from '../ReUse'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux';
import { fetchCosmetics } from '../actions';

class TestScreen extends Component {
      state = {
            columns:3
      }

      static navigationOptions = {
            header: null,
          };

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
                        return <ReUse  text={item.name} image={'./assets/images/cat.png'}/> //image needs changing
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
            fetchCosmetics: fetchCosmetics}, dispatch)
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