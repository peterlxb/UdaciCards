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
        data={decks}
        keyExtractor={(data, index) => index}
        renderItem={(data) =>
          <Deck
            deck={}
            onPress={() => navigate('DeckDetail', { deckDetails: decks.map(deck => deck) })}
            />
          }
      />

    )
  }
}

function mapStateToProps(decks) {

  return {
    decks: Object.keys(decks).reduce((result,id) => {
      result.push(decks[id].title)
      return result
    },[])
  }
}

export default connect(mapStateToProps, {getAllDecks})(AllDecks)
