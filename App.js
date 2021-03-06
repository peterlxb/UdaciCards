import React,{Component} from 'react';
import { StyleSheet, AppState,Text, View,Platform,StatusBar ,AppRegistry,AsyncStorage} from 'react-native';
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import MainNav from './components/TabsComponents'
import reducers from './reducers'

let store = createStore(reducers)

class App extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        isStoreLoading:false,
        store: store
      }
    }

    componentWillMount() {
      var self = this;
      AppState.addEventListener('change',this._handleAppStateChange.bind(this));
      this.setState({isStoreLoading:true});
      AsyncStorage.getItem('ALL_DECKS').then((value) => {
        if(value && value.length){
          let initialStore = JSON.parse(value)
          self.setState({store: createStore(reducers, initialStore)})

        } else {
          self.setState({store: store});
        }
        self.setState({isStoreLoading:false})
      }).catch((error) => {
        self.setState({store: store});
        self.setState({isStoreLoading:false});
      })
    }

    componentWillUnmount() {
      AppState.removeEventListener('change',this._handleAppStateChange.bind(this));
    }

    _handleAppStateChange(currentAppState) {
      let storingValue = JSON.stringify(this.state.store.getState())
      AsyncStorage.setItem('ALL_DECKS',storingValue);
    }

    render() {
      if(this.state.isStoreLoading){
        return <Text>Loading Store</Text>
      } else {
        return(
          <Provider store={this.state.store}>
            <View style={styles.container}>
              <View>
                <StatusBar
                  backgroundColor={'transparent'}
                    translucent />
              </View>
              <MainNav />
            </View>
          </Provider>
        )
      }
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

export default App
