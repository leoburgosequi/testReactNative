import { Dimensions, StyleSheet } from "react-native";

const styles = StyleSheet.create({
    title: {
      fontSize: 20,
      color: '#6f6f6f',
    },
    text: {
      fontSize: 17,
      color: '#6f6f6f',
    },
    whiteText: {
      fontSize: 16,
      color: '#FFF',
      fontWeight: 'bold',
    },
    textInput: {
      borderColor: '#6f6f6f',
      borderWidth: 1,
      width: Dimensions.get('screen').width * 0.6,
      borderRadius: 15,
      paddingLeft: 10
    },
    inputContainer: {
      marginTop: 20,
      flexDirection: 'row',
      justifyContent: 'space-between'
    },
    container: {
      width: '100%',
      padding: 20
    },
    addButton: {
      borderRadius: 10,
      backgroundColor: '#5897fb',
      width: Dimensions.get('screen').width * 0.25,
      padding: 10,
      alignItems: 'center',
      justifyContent: 'center'
    },
    scrollContainer: {
      paddingTop:30
    },
    itemContainer: {
      paddingVertical: 10,
      borderBottomColor: '#6f6f6f',
      borderBottomWidth:1,
      flexDirection:'row',
      justifyContent: 'space-between'
    },
    textDone:{
      color: '#3BBF86',
      fontSize: 16,
      textDecorationLine: 'line-through'
    },
    removeButton: {
      backgroundColor: '#F33D3D',
      paddingHorizontal:10,
      borderRadius:10,
      justifyContent:'center',
      alignItems:'center',
      width: Dimensions.get('screen').width * 0.22
    },
    doneButton: {
      backgroundColor:'#3BBF86',
      paddingHorizontal:10,
      borderRadius:10,
      justifyContent:'center',
      alignItems:'center',
      width: Dimensions.get('screen').width * 0.22
    }
  });

  export default styles;
  