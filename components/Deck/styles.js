import {StyleSheet} from 'react-native'
import { red ,black} from './../../utils/colors'

export default StyleSheet.create({
  deckContainer: {
    flex:1,
    flexDirection:'column',
    justifyContent: 'space-around',
    backgroundColor:'#fff',
    alignItems:'stretch',
    borderColor:red,
    borderWidth:1,
    padding:5
  },
  title: {
    textAlign:'center',
    fontSize:30
  },
  subTitle: {
    fontSize: 20,
    color:black,
    textAlign:'center'
  }
})
