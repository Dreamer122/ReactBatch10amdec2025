import { createSlice } from "@reduxjs/toolkit";

const todoSlice=createSlice({
    name:"todo",
    initialState:[{id:1,text:"hello"}],
    reducers:{
        addTodo:(state,action)=>{},
        deleteTodo:(state,action)=>{},
        updateTodo:(state,action)=>{},
    }
})

export const {addTodo,deleteTodo,updateTodo}=todoSlice.actions

export default todoSlice.reducer