import React, { Component } from 'react'
import {View, Text,Alert} from 'react-native'
import { connect } from 'react-redux'
import { FormLabel, FormInput, Button, FormValidationMessage } from 'react-native-elements'
import { saveDeckTitle } from '../utils/APIHelper'
import { addDeck } from '../actions/Deck'

class AddNewDeck extends Component {
  static navigationOptions = {
      tabBarLabel: 'Add Deck',
  };

  state = {
    deckTitle:'',
    error: false
  }

  onTextChange = (text) => {

    text ?
        this.setState(() => (
          {
            deckTitle: text,
            error: false
          }
        ))
        :
        this.setState(() => (
          {
            deckTitle: text,
            error: true
          }
        ));

  }

  submit = () => {

    const { deckTitle } = this.state
    const { navigation,decks } = this.props
    if(!deckTitle) {
      this.setState(() => ({error:true}));
      return
    }

    if(Object.keys(decks).map((itemTitle) => {
      if (itemTitle === deckTitle){
        Alert.alert('Warning', 'Deck title already exists !');
        return;
      }

    }))

    this.props.dispatch(addDeck(deckTitle))
    saveDeckTitle(deckTitle)

    this.setState({ deckTitle: '' });

    navigation.goBack();
  }

  render() {

    const { deckTitle, error } = this.state


    return(
      <View>
        <FormLabel>New DECK Title</FormLabel>
        <FormInput onChangeText={this.onTextChange} value={deckTitle} />
        <FormValidationMessage>{error ? 'Error Message': ''}</FormValidationMessage>
        <Button title="Submit" onPress={this.submit}/>
      </View>
    )
  }
}

function mapStateToProps(decks){
  return {
    decks: decks //plain object
  }
}



export default connect(mapStateToProps)(AddNewDeck);
