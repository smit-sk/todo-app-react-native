import { View, Text , StyleSheet } from 'react-native'
import React from 'react'
import headerStyles from './styles'
import { FontAwesome5 } from '@expo/vector-icons';

export default function Header() {
  return (
    <View style={headerStyles.mainContainer}>
        <FontAwesome5 name="tasks" size={24} color="white" />
        <Text style={headerStyles.text}>To-Do List</Text>
        <Text style={headerStyles.nameStyle} >by Smitkumar Khokhariya</Text>
    </View>
  )
}

