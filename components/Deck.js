import React,{ Component } from 'react'
import { View, Text ,StyleSheet,FlatList} from 'react-native'

class Deck extends Component {

  render() {
    return(
      <View style={styles.container}>
        <Text style={styles.item}>Deck1</Text>
        <Text style={styles.item}>Deck2</Text>
        <Text style={styles.item}>Deck3</Text>
      </View>
    )
  }
}

styles = StyleSheet.create({
  container: {
    flex:1
  },
  item:{
    fontSize:20,
    color:'red',
    padding:10,
    height:45,
    marginTop:20,
    marginBottom:20

  }
})

export default Deck
