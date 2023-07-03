import { View, Text , Switch } from 'react-native'
import React, { useState } from 'react'
import settingStyle from './styles';
import { useSelector, useDispatch } from 'react-redux';
import { toggleAllowDelete } from '../../Redux/preference_slice';

export default function SettingScreen() {
    
    const changeDeletePemission = ()=>{
        dispatch(toggleAllowDelete());
    }

   const allowDelete = useSelector((state)=>state.preference.allowDelete);
  const dispatch = useDispatch();

 
  return (
    <View style={settingStyle.container} >
      <Switch value ={allowDelete} onChange={changeDeletePemission} />
      <Text> Switch to allow user to delete tasks. </Text>
    </View>
  )
}