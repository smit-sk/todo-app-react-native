import { createSlice } from "@reduxjs/toolkit";
import uuid from 'react-uuid';

const initialState = {
    listTask: [
        {
            id: uuid(),
            description: "Walk the dog",
            done: true
        },
        {
            id: uuid(),
            description: "Wash the car",
            done: false
        },
    ]
}

export const tasksSlice = createSlice({
    name: 'Tasks',
    initialState,
    reducers: {
        setTasks:(state , actions )=>{
            console.log("#====> In Set Task <====#")
            state.listTask = actions.payload;
            console.log("State " , state.listTask)

        },
        addTask: (state, actions) => {
            console.log("#====> In Set Task <====#")
            state.listTask.push(
                {
                    id: actions.payload.id,
                    description: actions.payload.description,
                    done: actions.payload.done
                }
            );
        },
        deleteTask: (state, actions) => {
            const id = actions.payload.id;
            const updateTask = state.listTask.filter((t) => t.id != id)
            state.listTask = updateTask;
        },
        changeStateTask: (state, actions) => {

            const id = actions.payload.id;
            const updateTask = state.listTask.map((t) => {
                if (t.id == id) t.done = !t.done;
                return t;
            })
            state.listTask = updateTask;
        }
    }

})

export const { setTasks ,addTask, deleteTask, changeStateTask } = tasksSlice.actions;
export default tasksSlice.reducer;
