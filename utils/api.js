import { AsyncStorage } from 'react-native';

const STORAGE_KEY = '@flashcards:storage';

export function getAllDecks() {
  return AsyncStorage.getItem(STORAGE_KEY).then(JSON.parse).then((result) => result);
}

export function getDeck() {

}

export function addDeck(deckTitle) {
  return AsyncStorage.getItem(STORAGE_KEY).then(JSON.parse)
    .then((result) => {
      result[deckTitle] = {
        title: deckTitle,
        questions:[]
      };

      AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(result));
      return result
    });
}

export function setData(data){
  return AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(data));
}

export function addCard(deckTitle, card) {
  return AsyncStorage.getItem(STORAGE_KEY).then(JSON.parse)
    .then((result) => {
      result[deckTitle].questions.push(card);

      AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(result));
      return result;
    });
}

export function flush(){
  return AsyncStorage.removeItem(STORAGE_KEY).then(
    () => console.log('cleared!')
  )
}
