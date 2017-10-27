import React,{Component} from 'react';
import { StyleSheet, Text, View,Platform,StatusBar } from 'react-native';
import MainNav from './components/TabsComponents'


export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <View>
          <StatusBar
            backgroundColor={'transparent'}
            translucent />
        </View>
        <MainNav />
      </View>
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
