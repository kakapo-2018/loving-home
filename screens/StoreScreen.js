import React, { Component } from 'react'
import {
      StyleSheet,
      View, Image,
      FlatList,
      Text,
      ImageBackground
} from 'react-native'

import ReUse from '../ReUse'
import inventory from "../inventory";

export default class TestScreen extends Component {
      constructor(){
            super()
            this.state = {
                  dataSource: []
            }
      }

      state = {
            columns:3
      }

      static navigationOptions = {
            header: null,
          };

      renderItem = ({ item }) => {
            let customData = require('../inventory');
            return (
                  <View>
                  <Image source = {{ uri: customData.item.image}}/>
                  <View>
                        <Text>{customData.item.name}</Text>
                        <Text>{customData.item.price}</Text>
                  </View>
            </View>
            )
      }

      // componentDidMount() {
      //       const file = '../inventory.json'
      //       fetch(file)
      //       .then((response) => response.json())
      //       .then((responseJson) => {
      //             this.setState({
      //                   dataSource: responseJson.cosmetics
      //             })
      //       })
      //       .catch((error) => {
      //             console.log(error)
      //       })
      // }

      render(){
            const {columns} = this.state
            return (
                  <View style = {styles.container}>
                  <ImageBackground style={styles.landing} source={require('../assets/images/store_background.jpg')} resizeMode='cover'>
                  <Text style={styles.pageheader}>Store</Text>
                  <FlatList 
                  numColumns = {columns}
                   data = {this.state.dataSource}
                    renderItem = {this.renderItem}
                    keyExtractor={(item) => item.toString()}
                  />
                  </ImageBackground>
                  </View>
            )
      }
}

const styles = StyleSheet.create({
      container: {
            flex:1,
        justifyContent: 'space-between'
            
            
      },
      pageheader: {
            fontSize: 40,
            marginTop: 25
      },
      landing:{
            
            height: '100%',
            
      }
})