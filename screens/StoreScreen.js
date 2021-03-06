import React, { Component } from 'react'
import {
      StyleSheet,
      View,
      FlatList,
      Text,
      ImageBackground,
      TouchableWithoutFeedback
} from 'react-native'

import ReUse from '../ReUse'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux';
import { fetchCosmetics, updateActiveStoreCarousel, setAllCosmetics, spendMoney } from '../actions';

class TestScreen extends Component {
      state = {
            columns:3,
            storepics: [ require('../assets/images/cosmetics/bowler-hat-512.png'), require('../assets/images/cosmetics/glasses-2-512.png'),
            require('../assets/images/cosmetics/crown-2-512.png'), require('../assets/images/cosmetics/tie-512.png'),
            require('../assets/images/cosmetics/mustache-2-512.png')]
            
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
                  
                  <Text style={styles.pageheader}>¥{this.props.storeItems.currentCoins}</Text>
                  <FlatList 
                        numColumns = {columns}
                        data = {this.props.storeItems.storeCarousel.cosmetics}
                        renderItem = {({ item }) => {
                              return <TouchableWithoutFeedback onPress={() => this.props.spendMoney(item.price)}>
                              <ReUse  name={item.name} price={item.price} id={item.id-1} image={this.state.storepics[item.id]}/>
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
            backgroundColor: 'lightgreen',
            fontSize: 40,
            marginTop: 25,
            borderRadius: 10,
            borderWidth: 2, 
            borderColor: '#d6d7da',
            width: 120,
            paddingLeft: 5
      },
      landing:{
            flex: 1,
            height: '100%',
            justifyContent: 'center',
            alignItems: 'center'
            
      }
})