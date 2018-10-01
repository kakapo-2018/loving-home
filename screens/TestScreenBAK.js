import React from 'react'
import {StyleSheet, Text, View, FlatList, Dimensions} from 'react-native'

const data = [
   {key: 'A'}, {key: 'B'}, {key: 'C'}, {key: 'D'}, {key: 'E'}, {key: 'F'}, {key: 'G'}, {key: 'H'}, {key: 'I'}
]

const numColumns = 3

export default class TestScreen extends React.Component{
   renderItem = ({ item, index }) => {
      return (
         <View style = {styles.item}>
            <Text style = {styles.itemText}>{item.key}</Text>
         </View>
      )
   }

   render(){
      return(
         <FlatList
            data = {data}
            style = {styles.container}
            renderItem = {this.renderItem}
            numColumns = {numColumns}
         />
      )
   }

   
}

const styles = StyleSheet.create({
      container: {
         flex: 1,
         marginVertical: 20
      },
      item:{
         backgroundColor: '#4D2431'
      }
   })