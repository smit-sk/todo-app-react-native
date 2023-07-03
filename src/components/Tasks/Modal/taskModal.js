import { View, Text, Modal, Button, TouchableOpacity, Switch } from 'react-native'
import { React, useState } from 'react'
import taskModalStyle from './taskModalStyle'
import { MaterialIcons } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';

export default function TaskModal({id, showModal, modalVisibility, desc , isdone, onDeleteClick , handleStateEvent }) {
    
    const onPressDelete=()=>{
        onDeleteClick(id);
    }

    const changeTaskState=()=>{
        handleStateEvent(id);
    }

    return (
        <Modal visible={showModal} animationType='none' transparent={true}>
            <TouchableOpacity
                activeOpacity={1}
                style={taskModalStyle.modalContainer}
                onPress={modalVisibility}
            >
                <View style={taskModalStyle.modalStyle}>
                <View style = {taskModalStyle.closeStyle}>
                    <Entypo.Button name="cross" style={{padding : 0 , margin : 0 }} backgroundColor='transparent' underlayColor='transparent' size={28} color="black" onPress={modalVisibility} />
                </View>
                    <Text style={taskModalStyle.descStyle}>{desc}</Text>
                    <View style={taskModalStyle.contentModal}>
                        <Switch
                            value={isdone}
                            onValueChange={changeTaskState}
                            trackColor={{ false: '#daecec', true: '#008080' }}
                            ios_backgroundColor="#daecec"></Switch>
                        <MaterialIcons.Button name="delete" style={taskModalStyle.deleteButton} size={35} color='red' backgroundColor='transparent' underlayColor='transparent' onPress={onPressDelete} />
                    </View>
                    <View style={taskModalStyle.contentModal}>
                        <Text>Task Status</Text>
                        <Text>Delete Task</Text>
                        </View>
                      </View>
            </TouchableOpacity>
        </Modal>
    );
}