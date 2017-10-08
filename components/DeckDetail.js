import React,{ Component } from 'react'
import {Text, View,StyleSheet ,TouchableOpacity} from 'react-native'

class DeckDetail extends Component {
  render() {
    return(
      <View style={styles.container}>
        <View>
          <Text style={styles.item}>This is deck1</Text>
          <Text>3 cards</Text>
        </View>
        <View style={styles.SubmitBtn}>
          <TouchableOpacity>
            <Text style={styles.item}>Add Card</Text>
          </TouchableOpacity>

          <TouchableOpacity>
            <Text style={styles.item}>Start Quiz</Text>
          </TouchableOpacity>
        </View>
      </View>
    )
  }
}

styles = StyleSheet.create({
  container: {
    flex:1
  },
  item: {
    textAlign:'center',
    color:'purple'
  },
  SubmitBtn: {
    backgroundColor:'purple',
    padding:10,
    borderRadius:7
  }
})

export default DeckDetail
