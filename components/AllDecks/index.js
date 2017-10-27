import React,{ Component } from 'react'
import { View, Text ,StyleSheet,FlatList} from 'react-native'
import styles from './styles';
import Deck from '../Deck'
import { getDecks } from './../../utils/helper'


class AllDecks extends Component {

  state = {
    decks: {}
  }

  componentDidMount() {
    getDecks().then((decks) => {
      this.setState({
        decks
      })
    })
  }

  render() {

    const { decks } = this.state
    const { navigate } = this.props.navigation

    return(

      <FlatList
        data={Object.keys(decks)}
        keyExtractor={(data, index) => index}
        renderItem={(data) =>
          <Deck
            deck={decks[data.item]}
            onPress={() => navigate('DeckDetail', { deckDetails: decks[data.item] })}
            />
          }
      />

    )
  }
}

export default AllDecks
