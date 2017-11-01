import { AsyncStorage } from 'react-native'
import { Notifications, Permissions } from 'expo'

export const CORRECT = 'correct';
export const INCORRECT = 'incorrect';

const NOTIFICATION_KEY =  'UdaciCards:notifications'
const ALL_DECKS = 'ALL_DECKS';

export function getOriginData() {
  const data = {
    React:{
      deckTitle: 'React',
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
      deckTitle:'JavaScript',
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

export function setData(data){
  return AsyncStorage.setItem(ALL_DECKS, JSON.stringify(data));
}

export function getDecks (){

  return AsyncStorage.getItem(ALL_DECKS).then(JSON.parse)
          .then((decks) => {
            if(decks !== null) {
              return decks
            }

            return getOriginData();
          })
}

export function saveDeckTitle (deckTitle) {

  return AsyncStorage.getItem(ALL_DECKS).then(JSON.parse)
    .then((result) => {
      result[deckTitle] = {
        deckTitle: deckTitle,
        questions:[]
      };

      AsyncStorage.setItem(ALL_DECKS, JSON.stringify(result));
      return result
    });
}

export function addCardToDeck(deckTitle, card){

  return AsyncStorage.getItem(ALL_DECKS).then(JSON.parse).then((result) => {
      result[deckTitle].questions.push(card);

      AsyncStorage.setItem(ALL_DECKS, JSON.stringify(result));
      return result;
  });
}



export function clearLocalNotification () {
  return AsyncStorage.removeItem(NOTIFICATION_KEY)
    .then(Notifications.cancelAllScheduledNotificationsAsync)
}

function createNotification() {
  return{
    title: 'Log your stats',
    body: '👋 dont forget to answer the quiz for today!',
    ios: {
      sound:true
    },
    android: {
      sound:true,
      priority:'high',
      sticky:false,
      vibrate:true
    }
  }
}

export function setLocalNotification() {
  AsyncStorage.getItem(NOTIFICATION_KEY)
    .then(JSON.parse)
    .then((data) => {
      if(data === null) {
        Permissions.askAsync(Permissions.NOTIFICATIONS)
          .then(({status}) => {
            if(status === 'granted') {
              Notifications.cancelAllScheduledNotificationsAsync()

              let tomorrow = new Date()
              tomorrow.setDate(tomorrow.getDate() + 1)
              tomorrow.setHours(8)
              tomorrow.setMinutes(0)

              Notifications.scheduleLocalNotificationAsync(
                createNotification(),
                {
                  time: tomorrow,
                  repeat: 'day'
                }
              )

              AsyncStorage.setItem(NOTIFICATION_KEY,JSON.stringify(true))
            }
          })
      }
    })
}
