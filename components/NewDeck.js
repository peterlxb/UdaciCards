import React,{ Component } from 'react'
import {View, Text, StyleSheet } from 'react-native'

class NewDeck extends Component {
  render() {
    return(
      <View style={styles.container}>
        <Text>create new Deck</Text>
      </View>
    )
  }
}

styles = StyleSheet.create({
  container:{
    flex:1,
    paddingTop:10
  }
})

export default NewDeck
