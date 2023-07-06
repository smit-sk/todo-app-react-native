import { View, Text, TextInput, Button, Switch, Keyboard, ActivityIndicator } from 'react-native'
import React from 'react'
import formstyles from './styles'
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTask } from '../../Redux/tasks_slice';
import uuid from 'react-uuid';
import * as database from '../../database';


export  default function Form() {

  const [taskDescription, setTaskDescription] = useState('');
  const [taskDone, setTaskDone] = useState(false);
  const [errorMsg, setErrorMsg] = useState(null);
  const [loader, setLoader] = useState(false);

  const dispatch = useDispatch();

  const AddTask =  async (desc, done) => {

    const data = {
      id: uuid(),
      description: desc,
      done: done
    }

    console.log(data)
    setLoader(true);
    
    const id = await database.save(data); 
    
    console.log("ID=> ", id)
    if (id !=null) {
      data.id = id;
      console.log("proceed data", data);
      dispatch(addTask(data));
  
      setLoader(false);
      setErrorMsg(null);
      setTaskDescription("");
      setTaskDone(false);
      Keyboard.dismiss();
    } else {
      console.log("Failed to add the task in firebase");
    }
  
    setLoader(false);
     

  }

  const handleAddPress = () => {

    if (taskDescription) {
      AddTask(taskDescription, taskDone);
      
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

  if (loader) {
    return <ActivityIndicator />
  } else {
    return (
      <View style={formstyles.container} >
        <Text style={formstyles.descStyle} >Description :</Text>
        <TextInput placeholder='Enter the task.' maxLength={150} onChangeText={handleDescriptionChange} defaultValue={taskDescription} style={formstyles.textInput} editable={true}></TextInput>
        {errorMsg && (
          <Text style={formstyles.errorStyle}>{errorMsg}</Text>
        )}
        <View style={formstyles.subContainer}>
          <Switch
            value={taskDone}
            onValueChange={handleStatusChange}
            trackColor={{ false: '#daecec', true: '#008080' }}
            ios_backgroundColor="#daecec"
          />
          <View style={formstyles.buttonStyle}>
            <Button title='Add' onPress={handleAddPress} color='#008080' />
          </View>
        </View>
        <View style={formstyles.switchLabelStyle}>
          <Text>Completed</Text>
        </View>
      </View>
    )
  }
}


