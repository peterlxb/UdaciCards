import React, { Component } from 'react';
import { View} from 'react-native';
import { FormLabel, FormInput, Button, FormValidationMessage } from 'react-native-elements';
import { addCardToDeck ,clearLocalNotification,setLocalNotification} from '../utils/helper';

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

    submit = async () => {
        const { question, answer } = this.state
        const { navigation } = this.props;
        const { deckTitle } = this.props.navigation.state.params

        await addCardToDeck(deckTitle, {question, answer});
        this.setState({ question: '', answer: '' });

        clearLocalNotification().
          then(setLocalNotification)

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

export default AddCard;
