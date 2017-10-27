import React, { Component } from 'react'
import {View, Text} from 'react-native'
import { FormLabel, FormInput, Button, FormValidationMessage } from 'react-native-elements'
import { saveDeckTitle } from '../utils/helper'

class AddNewDeck extends Component {
  static navigationOptions = {
      tabBarLabel: 'Add Deck',
  };

  state = {
    title:'',
    error: false
  }

  onTextChange = (text) => {

    text ?
        this.setState(() => (
          {
            title: text,
            error: false
          }
        ))
        :
        this.setState(() => (
          {
            title: text,
            error: true
          }
        ));

  }

  submit = () => {
    const { title } = this.state
    const { navigate } = this.props.navigation
    if(!title) {
      this.setState(() => ({error:true}));
      return
    }

    saveDeckTitle(title).then((data) => navigate('DeckList'));
  }

  render() {

    const { title, error } = this.state

    return(
      <View>
        <FormLabel>New DECK Title</FormLabel>
        <FormInput onChangeText={this.onTextChange} value={title} />
        <FormValidationMessage>{error ? 'Error Message': ''}</FormValidationMessage>
        <Button title="Submit" onPress={this.submit}/>
      </View>
    )
  }
}

export default AddNewDeck;
