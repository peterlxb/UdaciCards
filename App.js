import React,{Component} from 'react';
import { StyleSheet, Text, View,Platform } from 'react-native';
import Deck from './components/Deck'
import NewDeck from './components/NewDeck'
import { TabNavigator } from 'react-navigation'
import { FontAwesome, Ionicons } from '@expo/vector-icons'

const Tabs = TabNavigator({
  Deck: {
    screen:Deck,
    navigationOptions: {
      tabBarLabel:'Decks',
      tabBarIcon: ({tintColor}) => <Ionicons name='ios-bookmarks' size={30} color={tintColor}/>
    }
  },
  NewDeck: {
    screen:NewDeck,
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

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Tabs />
      </View>
    );
  }
}

styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor:"white",
    paddingTop:20,
    justifyContent:'space-between',
    marginTop:30,
    marginBottom:80
  }
})
