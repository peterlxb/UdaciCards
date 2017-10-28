import React, { Component } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import styles from './styles'

class DeckDetail extends Component {
    render() {
        const { state, navigate } = this.props.navigation;
        const deck = state.params.deckDetails;
        return (
            <View style={styles.container}>
                <Text style={styles.title}>{deck.title}</Text>
                <Text style={styles.subtitle}>{deck.questions.length} cards</Text>
                <TouchableOpacity style={[styles.button, styles.addButton]}>
                    <Text onPress={() => navigate('AddCard', {deckTitle: deck.title})}>Add Card</Text>
                </TouchableOpacity>
                <TouchableOpacity style={[styles.button, styles.startButton]}>
                    <Text style={styles.startText} onPress={() => navigate('Quiz',{deck})}>Start a Quiz</Text>
                </TouchableOpacity>
            </View>
        )
    }
}



export default DeckDetail;
