import React,{ Component } from 'react'
import {Text, View, StyleSheet, TouchableOpacity} from 'react-native'

class DeckDetail extends Component {
  render() {

    const {state, navigate} = this.props.navigation
    const deck = state.params.deckDetails

    return(
      <View style={styles.container}>

          <Text style={styles.title}>{deck.title}</Text>
          <Text style={styles.subtitle}>{deck.questions.length} cards</Text>


          <TouchableOpacity style={[styles.button, styles.SubmitBtn]}>
            <Text onPress={() => navigate('AddCard',{deckTitle: deck.title})}>Add Card</Text>
          </TouchableOpacity>

          <TouchableOpacity style={[styles.button, styles.startButton]}>
            <Text style={styles.startText} onPress={() => navigate('Quiz',{deck})}>Start Quiz</Text>
          </TouchableOpacity>

      </View>
    )
  }
}

styles = StyleSheet.create({
  container: {
    flex:1,
    alignItems:'center'
  },
  title: {
    fontSize:30
  },
  subtitle: {
    fontSize:12
  },
  button: {
    borderRadius:10,
    padding:30,
    margin:20
  },
  SubmitBtn: {
    backgroundColor:'purple',
    borderColor:'black',
    borderWidth:1,
  },
  startButton: {
    backgroundColor:"black",
  },
  startText: {
    color:'white'
  }
})

export default DeckDetail