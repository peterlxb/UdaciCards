import { AsyncStorage } from 'react-native'
import {
  getAllDecks,
  addDeck,
  setData,
  addCard,
} from './api'

export const CORRECT = 'correct';
export const INCORRECT = 'incorrect';

export function getOriginData() {
  const data = {
    React:{
      title: 'React',
      questions: [
        {
          queston: 'what is React?',
          answer: 'A library for managing user interfaces'
        },
        {
          question: 'Where do you make Ajax requests in React?',
          answer:'The componentDidMount lifecycle event'
        }
      ]
    },
    JavaScript: {
      title:'JavaScript',
      questions: [
        {
          question:'what is closure',
          answer:'The combination of a function and the lexical environment within which that function was declared.'
        }
      ]
    }
  }

  setData(data);
  return data
}

export function getDecks() {
  return getAllDecks().then((decks) => {
    if(decks !== null) {
      return decks
    }

    return getOriginData();
  });
}

export function saveDeckTitle(title) {
  return addDeck(title);
}

export function addCardToDeck(title, card){
  return addCard(title, card)
}
