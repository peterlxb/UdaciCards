export const ADD_DECK =  "ADD_DECK"
export const GET_DECK = "GET_DECK"
export const REMOVE_DECK = "REMOVE_DECK"

export function addDeck(deckTitle) {
  return {
    type:ADD_DECK,
    deckTitle
  }
}

export function getAllDecks(decks) {
  return {
    type:GET_DECK,
    decks,
  }
}

export function removeDeck({title}){
  return {
    type:REMOVE_DECK,
    title
  }
}
