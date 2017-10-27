import { TabNavigator,StackNavigator } from 'react-navigation'
import { FontAwesome, Ionicons } from '@expo/vector-icons'
import { StyleSheet, Text, View,Platform,StatusBar } from 'react-native';
import React,{Component} from 'react';
import AddNewDeck from './AddNewDeck'
import AllDecks from './AllDecks'
import DeckDetail from './DeckDetail'
import AddCard from './AddCard'
import Quiz from './Quiz'

const Tabs = TabNavigator({
  Deck: {
    screen:AllDecks,
    navigationOptions: {
      tabBarLabel:'Decks',
      tabBarIcon: ({tintColor}) => <Ionicons name='ios-bookmarks' size={30} color={tintColor}/>
    }
  },
  NewDeck: {
    screen:AddNewDeck,
    navigationOptions: {
      tabBarLabel:'NewDeck',
      tabBarIcon: ({tintColor}) => <FontAwesome name='plus-square' size={30} color={tintColor} />
    }
  },
},{
  navigationOptions:{
    header:null
  },
  tabBarOptions: {
    activeTintColor: Platform.OS === 'ios' ? 'purple' : 'white',
    style: {
      height: 56,
      backgroundColor: Platform.OS === 'ios' ? 'white' : 'purple',
      shadowColor: 'rgba(0, 0, 0, 0.24)',
      shadowRadius:6,
      shadowOpacity:1
    }
  }
})

const MainNav = StackNavigator({
  Home:{
    screen: Tabs
  },
  DeckDetail: {
    screen:DeckDetail
  },
  Quiz: {
    screen:Quiz
  },
  AddCard: {
    screen:AddCard
  }
},{
  initialRouteName: 'Home',
});

export default MainNav
