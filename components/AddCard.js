import React, { Component } from 'react';
import { View,Alert} from 'react-native';
import {connect} from 'react-redux';
import { FormLabel, FormInput, Button, FormValidationMessage } from 'react-native-elements';
import { addCardToDeck ,clearLocalNotification,setLocalNotification} from '../utils/APIHelper';
import {addCard} from '../actions/Card'

class AddCard extends Component {


    state = {
        question: '',
        answer: ''
    }

    onTextChange = (type, text) => {
        this.setState(() => ({
            [type]: text
        }));
    }

    submit = () => {
        const { question, answer } = this.state;
        const { navigation } = this.props;
        const { title } = navigation.state.params;

        //this.props.dispatch(addCard(title,answer,question));

        addCardToDeck(title, {question, answer});

        this.setState({ question: '', answer: '' });

        navigation.goBack();
    }

    render() {
        const { question, answer } = this.state;

        return (
            <View>
                <FormLabel>Question</FormLabel>
                <FormInput onChangeText={(text) => this.onTextChange('question', text)} value={question}/>

                <FormLabel>Answer</FormLabel>
                <FormInput onChangeText={(text) => this.onTextChange('answer',text)} value={answer}/>
                <Button title="Submit" disabled={!(question && answer)} onPress={this.submit} />
            </View>
        );
    }
}

function mapStateToProps(decks){
  return {
    decks: decks
  }
}


export default connect(mapStateToProps)(AddCard);
