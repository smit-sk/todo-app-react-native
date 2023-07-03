import { View, Text, Alert, TouchableOpacity } from 'react-native'
import { React, useState } from 'react'
import taskstyles from './style'
import TaskModal from '../Modal/taskModal';
import { useSelector, useDispatch } from 'react-redux';
import { deleteTask, changeStateTask } from '../../../Redux/tasks_slice';

export default function Task({ id, description, done }) {
  const allowDelete = useSelector((state)=>state.preference.allowDelete)
  const dispatch = useDispatch();

  const handleDeletePress = () => {
    Alert.alert(allowDelete ? 'Delete Task' : 'Permission Required',
      allowDelete ? 'Are you sure you want to delete this task?' : 'You do not have a permission to delete the task', [
      {
        text: allowDelete ? "Delete" : "Okay",
        style: allowDelete ? 'destructive' : undefined,
        onPress: () => {
          allowDelete ? dispatch(deleteTask({id})) : null ;
        }
      },
      {
        text: "Cancel",
        style : 'cancel',
        onPress: () => {

        }
      }
    ])
  }

  const handleStateChange = () => {
    dispatch(changeStateTask({id}))
  }


  const [showModal, setModalState] = useState(false);

  const changeModalState = () => {
    setModalState(!showModal)
  }

  return (
    <TouchableOpacity onPress={changeModalState} style={taskstyles.container}>

      <TaskModal id={id} showModal={showModal} modalVisibility={changeModalState} desc={description} isdone={done} onDeleteClick={handleDeletePress} handleStateEvent={handleStateChange} >
      </TaskModal>

      <View style={taskstyles.taskHeader}>
        <Text style={taskstyles.textStyles}>{description.trim()} </Text>
      </View>
      <Text style={{ paddingVertical: 5, }} >{id.trim()}</Text>
      <View style={taskstyles.statustyle}>
        <Text style={taskstyles.statusTextStyle}>Status : </Text>
        <Text style={[taskstyles.textStyles, done ? taskstyles.openTask : taskstyles.closeTask]}>{done ? "Open" : "Close"} </Text>
      </View>
    </TouchableOpacity>
  )
}

