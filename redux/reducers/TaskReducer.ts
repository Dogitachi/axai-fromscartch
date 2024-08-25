import { createSlice } from '@reduxjs/toolkit'

export const initialState = {
    tasks: [],
    isLoaded: false,
    user: undefined,
    done: 0,
    pubKey: null,
    priKey: null,
}

export const TaskReducer = createSlice({
    name: 'task',
    initialState,
    reducers: {
        setUser: (state, action) => {
            state.user = action.payload
        },
        setTasks: (state, action) => {
            state.tasks = action.payload
            state.isLoaded = true
        },
        setDone: (state, action) => {
            state.done = 1;
        },
        setKeyPairs: (state, action) => {
            state.pubKey = action.payload.publicKey
            state.priKey = action.payload.privateKey
            console.log(action.payload)
        },
        removeKeyPairs: (state, action) => {
            state.pubKey = null
            state.priKey = null
        },
    },
})

export const { setUser, setTasks,setDone, setKeyPairs, removeKeyPairs } = TaskReducer.actions

export default TaskReducer.reducer