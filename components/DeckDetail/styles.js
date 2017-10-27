import {StyleSheet} from 'react-native'
import { white,black } from './../../utils/colors'

export default StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
    },
    title: {
        fontSize: 30
    },
    subtitle: {
        fontSize: 12
    },
    button: {
        borderRadius: 10,
        padding: 30,
        margin: 20,
    },
    addButton: {
        backgroundColor: '#fff',
        borderColor: black,
        borderWidth: 1,
    },
    startButton: {
        backgroundColor: black,
    },
    startText: {
        color: white,
    }
});
