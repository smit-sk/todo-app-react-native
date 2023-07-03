import { StatusBar} from 'expo-status-bar';
import { View, SafeAreaView,Platform } from 'react-native';
import Header from './src/components/header/header';
import Form from './src/components/Form/form';
import styles from './src/styles/main';
import { useEffect } from 'react';
import Tasks from './src/components/Tasks/tasks';
import * as SplashScreen from 'expo-splash-screen';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Entypo, FontAwesome } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import SettingScreen from './src/components/Setting/setting_screen';
import { store } from './src/Redux/store';
import {Provider} from 'react-redux';

SplashScreen.preventAutoHideAsync().then((prevented) => {
  console.log("Prevented => ", prevented)
}
).catch(
  (error) => {
    console.log("Error => ", error)
  }
);

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

  return (
    <Provider store={store}>
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
                  headerShown: false,
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
                    fontSize: 22
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
                  <Form/>
                )
              }}
            </Tab.Screen>
            <Tab.Screen name='Setting' options={
              {
                tabBarActiveTintColor: "#008080",
                tabBarInActiveTintColor: "red",
                tabBarLabelStyle: {
                  fontSize: 14
                },
                headerShown: false,
                // tabBarBadge: 2,
                tabBarIcon: ({ focused, color, size }) => {
                  return (
                    <MaterialIcons name="admin-panel-settings" size={24} color={color} />
                  )
                }
              }
            }  >
              {(props) => {
                return (
                  <SettingScreen/>
                )
              }}

            </Tab.Screen>
          </Tab.Navigator>
        </View>
      </SafeAreaView>
    </NavigationContainer>
    </Provider>
  );
}




