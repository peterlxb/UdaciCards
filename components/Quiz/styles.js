import { StyleSheet } from 'react-native' 
import { red, purple } from './../../utils/colors'

export default StyleSheet.create({
  container: {
    flex:1,
    justifyContent:'space-around',
    alignItems:'center'
  },
  mainText: {
    fontSize:30
  },
  ShowText: {
    fontSize:15,
    fontWeight:'bold'
  },
  correctButton: {
    backgroundColor: purple,
    borderRadius:10
  },
  incorrectButton: {
    backgroundColor:red,
    borderRadius:10
  },
  buttonText: {
    fontSize:20,
    padding:20,
    textAlign:'center'
  }
});
