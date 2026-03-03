import { createSlice,nanoid } from "@reduxjs/toolkit";

const todoSlice=createSlice({
    name:"todo",
    initialState:[{id:1,text:"hello"}],
    reducers:{
        addTodo:(state,action)=>{
            let obj={
                id:nanoid(),
                text:action.payload
            }
            state.push(obj)

        },
        deleteTodo:(state,action)=>{
            const newarray=state.filter((v)=>v.id!=action.payload)
           state=[...newarray]
            return state
        },
        updateTodo:(state,action)=>{
            const newarray=state.map((v)=>{
                if(action.payload.id!=v.id){
                    return v
                }
                else{
                    let obj={
                       ...action.payload
                    }
                    return obj
                }
            })
            state=[...newarray]
           return  state
        },
    }
})

export const {addTodo,deleteTodo,updateTodo}=todoSlice.actions

export default todoSlice.reducer



