import React, {Component} from 'react'
import { Text, TouchableOpacity, Dimensions, StyleSheet } from 'react-native'
import {connect} from 'react-redux'
import styles from './styles'

class Deck extends Component {
  render() {

    const { deck,onPress} = this.props
    const { width } = Dimensions.get('window')
    return(
      <TouchableOpacity style={[styles.deckContainer, {width: width}]} onPress={onPress}>
        <Text style={styles.title}>{deck.title}</Text>
        <Text style={styles.subTitle}>{deck.questions.length} cards</Text>
      </TouchableOpacity>
    )
  }
}

function mapStateToProps(decks) {
  return {
    deckTitles: Object.keys(decks).reduce((result,id) => {
      result.push(decks[id].title)
      return result
    },[])
  }
}

export default connect(mapStateToProps)(Deck)
