
import { StyleSheet } from "react-native";

const taskModalStyle = StyleSheet.create({
    modalContainer: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: 'rgba(0, 0, 0, 0.5)'
    },
    modalStyle: {
      padding: 20,
      backgroundColor: '#ffffff',
      width: '70%',
      borderRadius: 15,
      elevation: 10,
      shadowOpacity: 0.30,
      shadowRadius: 15,
    },
    descStyle : {
        fontSize : 22,
        fontWeight : 'bold'
     },
     contentModal:{
        paddingTop:20,
        flexDirection:'row',
        justifyContent: 'space-around',
        alignItems:'center'
     },
     closeStyle : {
        alignSelf:'flex-end'
     },
     
     
  });
  

export default taskModalStyle;