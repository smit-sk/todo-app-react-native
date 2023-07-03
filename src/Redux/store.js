import { configureStore } from "@reduxjs/toolkit";
import  preferenceReducer  from "./preference_slice";
import tasksReducer from "./tasks_slice";

export const store = configureStore({
    reducer:{
        preference : preferenceReducer , 
        tasks : tasksReducer,
    }
})