import { AsyncStorage } from 'react-native';

const ALL_DECKS = 'ALL_DECKS';

export function getAllDecks() {
  return AsyncStorage.getItem(ALL_DECKS).then(JSON.parse).then((result) => result);
}

export function getDeck() {

}

export function addDeck(deckTitle) {
  return AsyncStorage.getItem(ALL_DECKS).then(JSON.parse)
    .then((result) => {
      result[deckTitle] = {
        title: deckTitle,
        questions:[]
      };

      AsyncStorage.setItem(ALL_DECKS, JSON.stringify(result));
      return result
    });
}

export function setData(data){
  return AsyncStorage.setItem(ALL_DECKS, JSON.stringify(data));
}

export function addCard(deckTitle, card) {
  return AsyncStorage.getItem(ALL_DECKS).then(JSON.parse)
    .then((result) => {
      result[deckTitle].questions.push(card);

      AsyncStorage.setItem(ALL_DECKS, JSON.stringify(result));
      return result;
    });
}

export function flush(){
  return AsyncStorage.removeItem(ALL_DECKS).then(
    () => console.log('cleared!')
  )
}
