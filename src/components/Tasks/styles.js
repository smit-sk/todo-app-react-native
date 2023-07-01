import { Platform, StyleSheet } from "react-native";

const taskContainer = StyleSheet.create({
    container:{
      height: Platform.OS == "ios" ? '100%' : '70%',
      backgroundColor: 'white',
      flex:1,
      padding : 10,
      alignContent : "center"
    }
  });
  
export default taskContainer;