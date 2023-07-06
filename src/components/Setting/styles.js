import { StyleSheet } from "react-native"

const settingStyle = StyleSheet.create({
    maincontainer:{
        paddingHorizontal:10,
        paddingVertical:20,
    },
    container:{
        flexDirection : 'row',
        justifyContent:'space-around',
        alignItems:'center',
        paddingVertical:20,
        paddingHorizontal:10,
    
    },
    headingStyle:{
        fontWeight:'bold',
        fontSize:18,
    }
})

export default settingStyle;