import { View, ScrollView , Pressable , Text,Modal, Button  } from 'react-native'
import taskContainer from './styles'
import Task from './task/task'
import TaskModal from './Modal/taskModal';
import {React, useState } from 'react';
import taskModalStyle from './Modal/taskModalStyle';


export default function Tasks({navigation,route, data , handleDeleteEvent , handleStateEvent}) {

  // console.log("Navigation" , navigation)
  // console.log("route" , route)

  // const addTask =()=>{
  //   navigation.navigate('addTask')  
  // } 
  
  return (
      <View style={taskContainer.container}>
       <ScrollView>
        {data.map((task, index) => (
          <Task 
            id = {task.id}
            description={task.description}
            done ={task.done}
            handleDeleteEvent = {handleDeleteEvent}
            handleStateEvent = {handleStateEvent}
            />
        ))}
        </ScrollView>      
      </View>
  
  )
}

