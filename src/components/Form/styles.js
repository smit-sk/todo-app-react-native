import { Platform, StyleSheet } from "react-native"

const formstyles = StyleSheet.create({
    container:{
       paddingHorizontal : 20,
       backgroundColor:'#DAECEC',
       paddingVertical:20,
    },
    descStyle:{
      paddingBottom:10,
      fontSize:16,
      color:'black',
      fontWeight:'bold'
    },
    textInput:{
      height:40,
      marginBottom:10,
      paddingLeft:20,
      backgroundColor:'white',
      borderColor : '#008080',
      borderWidth:2,
      borderRadius:5
    },
    subContainer : {
      flexDirection:'row',
      justifyContent:'space-evenly'
    },
    buttonStyle:{
      marginHorizontal:10,
      flex:1,
    },
    errorStyle:{
      color:'red',
      fontSize:14,
      paddingBottom:10,
    },
    switchLabelStyle:{
      justifyContent:'flex-start',
      alignContent:'center'
    }
  });
  
  export default formstyles;