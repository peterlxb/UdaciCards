import {
  ADD_CARD,
  REMOVE_CARD
} from '../actions/Card'

import {
  ADD_DECK,
  GET_DECK,
  REMOVE_DECK
} from '../actions/Deck'

import {submitEntry} from '../utils/APIHelper'

function decks(state = {},action){
  const { title, question, answer} = action

  switch(action.type){
    case GET_DECK:{
      return {
        ...state,
        ...action.decks
      }
    }

    case ADD_DECK: {

      return {
        ...state,
        [title]: {
          title,
          questions:[],
        }
      }
    }

    case REMOVE_DECK: {

      return {
        ...state,
        [title]:{
          title:null
        }
      }
    }

    case ADD_CARD: {
      return {
        ...state,
        [title]: {
          title,
          questions:[{question, answer},...state[title].questions ]
        }
      }
    }


    default:
      return state;

  }
}

export default decks
