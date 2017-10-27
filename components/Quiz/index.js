import React, {Component} from 'react'
import {View, Text, TouchableOpacity} from 'react-native'
import { CORRECT, INCORRECT } from './../../utils/helper';

class Quiz extends Component {

  state = {
    showAnswer: false,
    currentCardIdx: 0,
    corrects: 0,
    incorrects: 0
  };

  //toggle false or true of the value showAnswer
  onShowPress = () => {
    this.setState((state) => ({ showAnswer: !state.showAnswer }));
  }

  onNextPress = (answer) => {
    //base on params answer
    if(answer === CORRECT) {
      this.setState((state) => ({
        showAnswer:false,
        currentCardIdx: state.currentCardIdx + 1,
        corrects: state.corrects + 1
      }));
    } else if (answer === INCORRECT) {
      this.setState((state) => ({
        showAnswer:false,
        currentCardIdx: state.currentCardIdx + 1,
        incorrects: state.incorrects + 1
      }));
    }
  }

  render() {

    const {
      showAnswer,
      currentCardIdx,
      corrects,
      incorrects
    } =  this.state

    const { deck } = this.props.navigation.state.params
    const currentCard = deck.questions[currentCardIdx]
    const numberOfQuestions = deck.questions.length

    //questions of cards are zero
    if(numberOfQuestions === 0) {
      return(
        <View style={styles.container}>
          <Text>No cards in this deck</Text>
        </View>
      );
    }
    //the last question
    if(currentCardIdx === numberOfQuestions){
      const percentage = (corrects/numberOfQuestions) * 100

      return (
        <View style={styles.container}>
          <Text>{`You got ${percentage}% correct`}</Text>
        </View>
      )
    }

    return(
      <View style={styles.container}>
        <Text>{`${currentCardIdx + 1}/${numberOfQuestions}`}</Text>

        {showAnswer ?
          <Text style={styles.mainText}>{currentCard.answer}</Text>
          :
          <Text style={styles.mainText}>{currentCard.question}</Text>
        }

        <TouchableOpacity onPress={this.onShowPress}>
            <Text style={styles.ShowText}>Show {showAnswer ? "Question" : "Anwser"}</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.correctButton} onPress={() => this.onNextPress(CORRECT)}>
          <Text style={styles.buttonText}>Correct</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.incorrectButton} onPress={() => this.onNextPress(INCORRECT)}>
          <Text style={styles.buttonText}>Incorrect</Text>
        </TouchableOpacity>
      </View>
    )
  }
}



export default Quiz
