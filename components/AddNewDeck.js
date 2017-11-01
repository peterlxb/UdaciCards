import React, { Component } from 'react'
import {View, Text,Alert} from 'react-native'
import { connect } from 'react-redux'
import { FormLabel, FormInput, Button, FormValidationMessage } from 'react-native-elements'
import { saveDeckTitle } from '../utils/APIHelper'
import {addDeck} from '../actions/Deck'

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
    const { navigation,decks } = this.props
    if(!title) {
      this.setState(() => ({error:true}));
      return
    }

    if(Object.keys(decks).map((deckTitle) => {
      if (deckTitle === title){
        Alert.alert('Warning', 'Deck title already exists !');
        return;
      }

    }))

    this.props.dispatch(addDeck(title))
    saveDeckTitle(title)

    this.setState({ title: '' });

    navigation.goBack();
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

function mapStateToProps(decks){
  return {
    decks: decks //plain object
  }
}



export default connect(mapStateToProps)(AddNewDeck);
