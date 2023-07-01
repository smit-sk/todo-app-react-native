import { StyleSheet } from "react-native";

const taskstyles = StyleSheet.create({
  container: {
    backgroundColor: '#DAECEC',
    margin:10,
    padding: 10,
    borderRadius: 7,
  },
  textStyles: {
    fontSize: 18,
    fontWeight:'bold'
  },
  closeTask : {
    color : 'red',
    fontWeight : 'bold'
  },
  openTask: {
    color : 'green',
    fontWeight : 'bold'
  } ,
  statustyle : {
    flexDirection:'row',
    alignContent:'space-between'
  }, 
  taskHeader : {
    flexDirection:'row',
    justifyContent: 'space-between',
    alignItems:'center',
    paddingBottom : 2,
  },
  deleteButton :{
    padding:2,
  },
  statusTextStyle:{
    fontSize:18
  }


});

export default taskstyles;