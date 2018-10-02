import React, { Component } from 'react'
import {
      Image,
      TouchableWithoutFeedback,
      Animated,
      Text
} from 'react-native'

import { connect } from 'react-redux'
import { bindActionCreators } from 'redux';
import { spendMoney } from './actions';

export  class ReUse extends Component {
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
                        onPressIn={() => {this.props.spendMoney(this.props.price); this.animateIn()}}
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
                              <Text>{this.props.name} ${this.props.price}</Text>
                              </Animated.View>
                        </TouchableWithoutFeedback>                 
            )
      }
}

function MapStateToProps(state){
      return {
          storeItems: state.store
        }}
    
    
    function MapDispatchToProps(dispatch){
          return bindActionCreators({
                spendMoney: spendMoney
          }, dispatch)
          }
    
    export default connect(MapStateToProps, MapDispatchToProps)(ReUse)

