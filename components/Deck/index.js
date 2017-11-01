import React, {Component} from 'react'
import { Text, TouchableOpacity, Dimensions, StyleSheet } from 'react-native'
import styles from './styles'

class Deck extends Component {
  render() {

    const { deck,onPress} = this.props
    const { width } = Dimensions.get('window')
    return(
      <TouchableOpacity style={[styles.deckContainer, {width: width}]} onPress={onPress}>
        <Text style={styles.title}>{deck.deckTitle}</Text>
        <Text style={styles.subTitle}>{deck.questions.length} cards</Text>
      </TouchableOpacity>
    )
  }
}



export default Deck
