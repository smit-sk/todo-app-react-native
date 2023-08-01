import { View, ScrollView , Text} from 'react-native'
import taskContainer from './styles'
import Task from './task/task'
import {React} from 'react';
import { useSelector } from 'react-redux';


export default function Tasks() {
  
  const taskList = useSelector((state)=>state.tasks.listTask)

  return (
      <View style={taskContainer.container}>
       <ScrollView>
        {taskList.length !=0 ? taskList.map((task, index) => (
          <Task 
            key = {task.id}
            id = {task.id}
            description={task.description}
            done ={task.done}
            />
        )) : <View style={taskContainer.noTaskContainer}><Text style={taskContainer.noTaskText}>No task added...</Text></View>}
        </ScrollView>      
      </View>
  
  )
}

