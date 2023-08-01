import { View, Text , Switch } from 'react-native'
import React, { useState } from 'react'
import settingStyle from './styles';
import { useSelector, useDispatch } from 'react-redux';
import { toggleAllowDelete } from '../../Redux/preference_slice';
import LocalNotification from './Local Notification';

export default function SettingScreen() {
    
    const changeDeletePemission = ()=>{
        dispatch(toggleAllowDelete());
    }

  const allowDelete = useSelector((state)=>state.preference.allowDelete);
  const dispatch = useDispatch();
 
  return (
    <View style={settingStyle.maincontainer}>
    <Text style = {settingStyle.headingStyle}>Preference : </Text>
    <View style={settingStyle.container} >
      <Switch value ={allowDelete} onChange={changeDeletePemission} 
      trackColor={{false: '#daecec', true: '#008080' }} 
          ios_backgroundColor="#daecec" />
      <Text> Switch to allow user to delete tasks. </Text>
    </View>
    <LocalNotification/>
    </View>
  )
}