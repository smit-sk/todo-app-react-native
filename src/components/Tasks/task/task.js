import { View, Text, Alert , TouchableOpacity } from 'react-native'
import {React, useState } from 'react'
import taskstyles from './style'
import { MaterialCommunityIcons } from '@expo/vector-icons';
import taskModalStyle from '../Modal/taskModalStyle';
import TaskModal from '../Modal/taskModal';


export default function Task({ id, description, done, handleDeleteEvent , handleStateEvent }) {

  const handleDeletePress = () => {
    Alert.alert('Delete Task',
    'Are you sure you want to delete this task?', [
      {
        text: "Delete",
        style: 'destructive',
        onPress: () => {
          handleDeleteEvent(id);
        }
      },
      {
        text: "Cancel",
        onPress: () => {

        }
      }
    ])
    
  }

  const [showModal, setModalState] = useState(false);
  const changeModalState=()=>{
    setModalState(!showModal)
  }

  return (
    <TouchableOpacity onPress={changeModalState} style={taskstyles.container}>
      <TaskModal id={id} showModal={showModal} modalVisibility={changeModalState} desc={description} isdone={done} onDeleteClick={handleDeletePress} handleStateEvent = {handleStateEvent} > 
      </TaskModal>
      <View style={taskstyles.taskHeader}>
        <Text style={taskstyles.textStyles}>{description.trim()} </Text>
        {/* <MaterialCommunityIcons.Button style={taskstyles.deleteButton} name="delete" size={24} color="red" backgroundColor='transparent'  underlayColor='transparent' onPress={handleDeletePress} /> */}
      </View>
      <Text style={{  paddingVertical:5,}} >{id.trim()}</Text>
      <View style={taskstyles.statustyle}>
        <Text style={taskstyles.statusTextStyle}>Status : </Text>
        <Text style={[taskstyles.textStyles, done ? taskstyles.openTask : taskstyles.closeTask]}>{done ? "Open" : "Close"} </Text>
      </View>
    </TouchableOpacity>
  )
}

