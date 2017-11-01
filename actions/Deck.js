export const ADD_DECK =  "ADD_DECK"
export const GET_DECK = "GET_DECK"
export const REMOVE_DECK = "REMOVE_DECK"

export function addDeck(title) {
  return {
    type:ADD_DECK,
    title
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
