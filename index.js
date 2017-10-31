import React, { Component } from 'react';
import { AppRegistry } from 'react-native';

const setup = require('./setup');

AppRegistry.registerComponent('myapp', setup);

export default class App extends React.Component {
  render() {
    return (
    <Provider store={createStore(reducers)}>
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
