import { StyleSheet } from "react-native"

const headerStyles = StyleSheet.create({
    mainContainer : {
        padding:10,
        backgroundColor : '#008080',
        justifyContent:'space-between',
        alignSelf: 'stretch',
        alignItems: 'center',
        flexDirection: 'row',
    },
    text:{
        fontSize:24,
        color:'white',
    },
    nameStyle:
    {   
        fontSize:16,
        color : 'white'
    }
 })

 export default headerStyles;
