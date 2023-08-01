import { StatusBar } from 'expo-status-bar';
import { View, SafeAreaView, Platform } from 'react-native';
import Header from './src/components/header/header';
import Form from './src/components/Form/form';
import styles from './src/styles/main';
import Tasks from './src/components/Tasks/tasks';
import * as SplashScreen from 'expo-splash-screen';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Entypo, FontAwesome } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import SettingScreen from './src/components/Setting/setting_screen';
import { store } from './src/Redux/store';
import { Provider } from 'react-redux';
import AppLoader from './src/appLoader';
import * as Notifications from 'expo-notifications';
import { useEffect } from 'react';


SplashScreen.preventAutoHideAsync().then((prevented) => {
  // console.log("Prevented => ", prevented)
}
).catch(
  (error) => {
    // console.log("Error => ", error)
  }
);

Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: true,
    shouldPlaySound: true,
    shouldSetBadge: true,
  }),
  handleSuccess: (notificationId) => {
    console.log("Handle success : ", notificationId)

  },
  handleError: (notification, error) => {
    console.log("Handler failed ", error.message)
  }
})

const Tab = createBottomTabNavigator();

export default function App() {
  useEffect(() => {
    const subscription = Notifications.addNotificationReceivedListener((notification) => {
      console.log('Notification Received:', notification);
    });
    console.log('Receive Subscription:', subscription);
    return () => {
      subscription.remove();
    }
  }, []);

  useEffect(() => {
    const subscription = Notifications.addNotificationResponseReceivedListener(response => {
      console.log('Notification Response:', response);
    });
    console.log('Interaction Subscription:', subscription);
    return () => {
      subscription.remove();
    }
  }, []);

  return (
    <Provider store={store}>
      <AppLoader />
      <NavigationContainer>
        <SafeAreaView style={{ paddingTop: Platform.OS == 'ios' ? 0 : 45, backgroundColor: "#DAECEC" }}>
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
                    <Form />
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
                    <SettingScreen />
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




