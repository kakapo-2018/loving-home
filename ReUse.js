import React, { Component } from 'react'
import {
     Image,
      TouchableWithoutFeedback,
      Animated,
      Text
} from 'react-native'

export default class ReUse extends Component {
      state = {
            animatePress: new Animated.Value(1)
      }

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

      render(){
            return (
                  
                        <TouchableWithoutFeedback 
                        onPressIn = {()=>this.animateIn()}
                        onPressOut = {()=>this.animateOut()}
                        >
                              <Animated.View style = {{margin: 5, width:150, height:100, backgroundColor: 'tomato',
                                    transform:[
                                        {
                                              scale:this.state.animatePress
                                        }  
                                    ]
                        }}>
                              <Image style = {{width:150, height:75}} source={require('./assets/images/cat.png')}/>
                              <Text>{this.props.text}</Text>
                              </Animated.View>
                        </TouchableWithoutFeedback>     
                  
            )
      }
}

