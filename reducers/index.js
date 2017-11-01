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
          questions:[{result:null,question, answer}, ...state[title].questions]
        }
      }
    }

    case REMOVE_CARD: {
      return {
        ...state,
        [title]: {
          title,
          questions: [...state[title].questions.filter(item => item.question !== question)]
        }
      }
    }
    default:
      return state;

  }
}

export default decks
