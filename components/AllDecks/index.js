import React,{ Component } from 'react'
import { connect } from 'react-redux'
import { View, Text ,StyleSheet,FlatList} from 'react-native'
import styles from './styles';
import Deck from '../Deck'
import { getDecks } from './../../utils/helper'
import {getAllDecks} from './../../actions/Deck'


class AllDecks extends Component {

  // state = {
  //   decks: {}
  // }

  componentDidMount() {
    getDecks().then(decks => this.props.getAllDecks(decks))

  }

  render() {

    const { decks } = this.props
    const { navigate } = this.props.navigation

    return(

      <FlatList
        data={Object.keys(decks)}
        keyExtractor={(data, index) => index}
        renderItem={(data) =>
          <Deck
            deck={decks[data.item]}
            onPress={() => navigate('DeckDetail', { deckDetails: decks[data.item]})}
            />
          }
      />

    )
  }
}

function mapStateToProps(decks) {

  return {
    decks: decks
  }
}

export default connect(mapStateToProps, {getAllDecks})(AllDecks)
