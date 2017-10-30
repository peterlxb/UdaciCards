import { AsyncStorage } from 'react-native';

const ALL_DECKS = 'ALL_DECKS';

export const  getAllDecks = async () => {

  try {
    const value = await AsyncStorage.getItem(ALL_DECKS);
    if(value) {
      return JSON.parse(value)
    }
    return {};
  } catch(error) {
    console.warn('Error getting decks:', error);
    return {};
  }

};

export const addDeck = async (deckTitle) => {

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

export const addCard = async (deckTitle, card) => {

    return AsyncStorage.getItem(ALL_DECKS).then(JSON.parse).then((result) => {
        result[deckTitle].questions.push(card);

        AsyncStorage.setItem(ALL_DECKS, JSON.stringify(result));
        return result;
    });
}
