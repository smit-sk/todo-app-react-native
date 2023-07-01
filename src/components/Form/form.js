import { View, Text, StyleSheet, TextInput, Button, Switch, Keyboard } from 'react-native'
import React from 'react'
import formstyles from './styles'
import { useState } from 'react';
export default function Form(props) {

  const [taskDescription, setTaskDescription] = useState('');
  const [taskDone, setTaskDone] = useState(false);
  const [errorMsg, setErrorMsg] = useState(null);

  const handleAddPress = () => {
    if (taskDescription) {
      props.onAddTask(taskDescription, taskDone);
      setErrorMsg(null);
      setTaskDescription("");
      setTaskDone(false);
      Keyboard.dismiss();
    } else {
      setErrorMsg("Description is required.")
    }
  }
  
  const handleDescriptionChange = (value) => {
    setTaskDescription(value);
  }

  const handleStatusChange = (value) => {
    setTaskDone(value)
  }

  return (
    <View style={formstyles.container} >
      <Text style={formstyles.descStyle} >Description :</Text>
      <TextInput placeholder='Enter the task.' maxLength={150} onChangeText={handleDescriptionChange} defaultValue={taskDescription} style={formstyles.textInput} editable = {true}></TextInput>
      {errorMsg && (
        <Text style={formstyles.errorStyle}>{errorMsg}</Text>
      )}
      <View style={formstyles.subContainer}>
        <Switch
          value={taskDone}
          onValueChange={handleStatusChange}
          trackColor={{false: '#daecec', true: '#008080' }} 
          ios_backgroundColor="#daecec"
        />
        <View style = {formstyles.buttonStyle}>
        <Button title='Add' onPress={handleAddPress} color='#008080' />
        </View>
      </View>
      <View style={formstyles.switchLabelStyle}>
        <Text>Completed</Text>
      </View>
    </View>
  )

}


