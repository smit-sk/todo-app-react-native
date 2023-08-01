import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    allowDelete : false,
    allowNotification : false,
}

export const preferanceSlice = createSlice({
    name : 'preferance',
    initialState ,
    reducers : {
        toggleAllowDelete:(state)=>{
            state.allowDelete = !state.allowDelete;
            console.log("Toggle Pressed...")
        },
        toggleAllowNotification:(state)=>{
            state.allowNotification = !state.allowNotification;
            console.log("Notification toggle pressed...")
        }

    }

})

export const {toggleAllowDelete , toggleAllowNotification}  = preferanceSlice.actions;
export default preferanceSlice.reducer;
