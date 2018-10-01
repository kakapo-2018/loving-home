import React, { Component } from 'react'
import {
      StyleSheet,
      View, Image,
      FlatList,
      Text,
      ImageBackground
} from 'react-native'

import ReUse from './ReUse'

export default class TestScreen extends Component {
      state = {
            columns:3
      }

      static navigationOptions = {
            header: null,
          };

      render(){
            const {columns} = this.state
            return (
                  <View style = {styles.container}>
                  <ImageBackground style={styles.landing} source={require('../assets/images/store_background.jpg')} resizeMode='cover'>
                  <Text style={styles.pageheader}>Store</Text>
                  <FlatList 
                  numColumns = {columns}
                   data = {[
                        require('../assets/images/cat.png'),
                        require('../assets/images/dog.png'),
                        require('../assets/images/robot-dev.png'),
                        require('../assets/images/neko-atsume.jpg'),
                        require('../assets/images/robot-prod.png'),
                        require('../assets/images/store_background.jpg'),
                        require('../assets/images/cat.png'),
                        require('../assets/images/robot-dev.png'),
                        require('../assets/images/robot-prod.png')
                    ]}
                    renderItem = {({ item }) => {
                        return <ReUse  text={item} image={item}/>
                    }}
                  //   keyExtractor = {
                  //         (index) => {return index}
                  //   }
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