import React from 'react';
import { useEffect } from 'react';
import { setTasks } from '../Redux/tasks_slice';
import * as SplashScreen from 'expo-splash-screen';
import * as database from '../database';
import uuid from 'react-uuid';
import { useDispatch } from 'react-redux';


function AppLoader() {
  const dispatch = useDispatch();

  useEffect(() => {
    // Loading Firebase Database
    
    (async () => {
      const loadeddata = await database.publishedData();
      console.log("My Function...", loadeddata)
      dispatch(setTasks(loadeddata));
    })();

    //  var loadedData =  database.load();
    //  console.log("Loaded Data ", loadedData);
    //   dispatch(setTasks(loadedData));
    // save();
    // update();

    SplashScreen.hideAsync()
      .then((e) => {
        console.log("t => ", e);
      })
      .catch((error) => {
        console.log("E => ", error);
      });
  }, []);

  return <></>; // or you can return a loading component if desired
}

export default AppLoader;
