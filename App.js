import { StatusBar, setStatusBarBackgroundColor } from 'expo-status-bar';
import { View, SafeAreaView, Text, ScrollView, StyleSheet, Platform, Modal, Button } from 'react-native';
import Header from './src/components/header/header';
import Form from './src/components/Form/form';
import styles from './src/styles/main';
import uuid from 'react-uuid';
import { useState, useEffect } from 'react';
import Tasks from './src/components/Tasks/tasks';
import * as SplashScreen from 'expo-splash-screen';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Ionicons, Entypo, FontAwesome } from '@expo/vector-icons';

SplashScreen.preventAutoHideAsync().then((prevented) => {
  console.log("Prevented => ", prevented)
}
).catch(
  (error) => {
    console.log("Error => ", error)
  }
);
const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();
export default function App() {

  useEffect(() => {
    console.log("Initiating starter..")
    SplashScreen.hideAsync().then((e) => {
      console.log("t => ", e)
    }
    ).catch(
      (error) => {
        console.log("E => ", error)
      }
    );
  }, [])

  const data = [
    {
      id: uuid(),
      description: "Walk the dog",
      done: true
    },
    {
      id: uuid(),
      description: "Wash the car",
      done: false
    },
  ];
  const [task, setTasks] = useState(data);

  const handleAddTask = (taskDescription, taskDone) => {
    console.log("New task Added")
    const newTask = [...task];
    newTask.push(
      {
        id: uuid(),
        description: taskDescription,
        done: taskDone,
      }
    );
    setTasks(newTask);
  }

  const onPressDelete = (id) => {
    console.log("Delete called..." + id)
    const filteredTask = task.filter((t) => t.id != id)
    console.log("Updated task :- ", filteredTask)
    setTasks(filteredTask);
  }

  const onPressSwitch = (id) =>{
      console.log("Task State Change called..." + id) 
     
      const newData = task.map((t)=>{
        console.log(t)
        if(t.id == id ){
           t.done = !t.done;
        }
        return t;
      })
      setTasks(newData);

  }

  return (

    <NavigationContainer>
      <SafeAreaView style={{ paddingTop: Platform.OS == 'ios' ? 0 : 25, backgroundColor: "#DAECEC" }}>
        <StatusBar style='auto' ></StatusBar>
        <View style={styles.container} >
          <Header />

          <Tab.Navigator>
            <Tab.Screen name="List Task"
              options={
                {
                  tabBarActiveTintColor: "#008080",
                  tabBarInActiveTintColor: "gray",
                  tabBarLabelStyle: {
                    fontSize: 14
                  },
                  headerShown:false,
                  // tabBarBadge: 2,
                  tabBarIcon: ({ focused, color, size }) => {
                    return (
                      <FontAwesome name="tasks" size={size} color={color} />
                    )
                  }
                }
              }
            >
              {(props) => {
                return (
                  <Tasks
                    {...props}
                    data={task}
                    handleDeleteEvent={onPressDelete}
                    handleStateEvent = {onPressSwitch}
                  />  
                )
              }}
            </Tab.Screen>
            <Tab.Screen name="Add Task"
              options={
                {
                  tabBarActiveTintColor: "#008080",
                  tabBarShowLabel: true,
                  headerStyle: {
                    backgroundColor: '#ffffff',

                  },
                  headerTintColor: '#008080', 
                  headerTitleStyle: {
                    fontWeight: 'bold', 
                    fontSize:22
                  },
                  tabBarLabelStyle: {
                    fontSize: 14,
                  },
                  tabBarIcon: ({ focused, color, size }) => {
                    return (
                      <Entypo name="add-to-list" size={size} color={color} />
                    )
                  }
                }
              }>
              {(props) => {
                return (
                  <Form
                    {...props}
                    onAddTask={handleAddTask}
                  />
                )
              }}
            </Tab.Screen>
          </Tab.Navigator>
        </View>
      </SafeAreaView>
    </NavigationContainer>
  );
}




