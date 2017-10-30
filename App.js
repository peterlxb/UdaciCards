import React,{Component} from 'react';
import { StyleSheet, Text, View,Platform,StatusBar } from 'react-native';
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import MainNav from './components/TabsComponents'
import reducer from './reducers'

export default class App extends React.Component {
  render() {
    return (
    <Provider store={createStore(reducer)}>
      <View style={styles.container}>
        <View>
          <StatusBar
            backgroundColor={'transparent'}
            translucent />
        </View>
        <MainNav />
      </View>
    </Provider>
    );
  }
}

styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor:"#fff",
    paddingTop:20,
    justifyContent:'space-between',
    marginTop:25,
    marginBottom:0
  }
})
