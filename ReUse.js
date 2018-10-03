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
            animatePress: new Animated.Value(1),
            storepics: [ 
                  require('./assets/images/cosmetics/bowler-hat-512.png'),
                  require('./assets/images/cosmetics/glasses-2-512.png'), 
                  require('./assets/images/cosmetics/crown-2-512.png'),
                  require('./assets/images/cosmetics/tie-512.png'),
                  require('./assets/images/cosmetics/mustache-2-512.png')]                 
      }

      animateIn(){
            Animated.timing(this.state.animatePress,{
                  toValue:0.8,
                  duration:200
            }).start()
      }

      animateOut(){
            Animated.timing(this.state.animatePress,{
                  toValue:1,
                  duration:200
            }).start()
      }

      render(){

            return (
                  
                        <TouchableWithoutFeedback 
                        onPressIn={() => {this.props.spendMoney(this.props.price); this.animateIn()}}
                        onPressOut = {()=>this.animateOut()}
                        >
                              <Animated.View style = {{margin: 5, width:150, height:100, backgroundColor: 'lightgreen', borderRadius: 10,
                              borderWidth: 2, borderColor: '#d6d7da',  paddingTop: 5,
                                    transform:[
                                        {
                                              scale:this.state.animatePress
                                        }  
                                    ]
                        }}>
                              <Image style = {{width:110, height:70}} source={this.state.storepics[this.props.id]}/>
                              <Text style = {{textAlign: 'center'}}>{this.props.name} ¥{this.props.price}</Text>
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
