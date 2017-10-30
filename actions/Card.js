export const ADD_CARD = "ADD_CARD"
export const REMOVE_CARD = "REMOVE_CARD"


export function addCard({title,question, answer}){
  return {
    type:ADD_CARD,
    title,
    question,
    answer
  }
}

export function removeCard({title,question}){
  return {
    type: REMOVE_CARD,
    question
  }

}
