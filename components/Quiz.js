import React, {Component} from 'react'
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native'

class Quiz extends Component {

  state = {

  }

  render() {
    return(

    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    justifyContent:'space-around',
    alignItems:'center'
  },
  mainText: {
    fontSize:30
  },
  flipText: {
    fontSize:15,
    fontWeight:'bold'
  },
  correctButton: {
    backgroundColor:'green',
    borderRadius:10
  },
  incorrectButton: {
    backgroundColor:'red',
    borderRadius:10
  },
  buttonText: {
    fontSize:20,
    padding:20,
    textAlign:'center'
  }
});

export default Quiz
