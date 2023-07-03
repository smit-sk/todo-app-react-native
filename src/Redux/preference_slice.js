import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    allowDelete : false
}

export const preferanceSlice = createSlice({
    name : 'preferance',
    initialState ,
    reducers : {
        toggleAllowDelete:(state)=>{
            state.allowDelete = !state.allowDelete;
            console.log("Toggle Pressed...")
        }
    }

})

export const {toggleAllowDelete}  = preferanceSlice.actions;
export default preferanceSlice.reducer;
