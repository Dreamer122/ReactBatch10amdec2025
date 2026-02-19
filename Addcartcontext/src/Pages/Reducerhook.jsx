import React, { useState,useReducer} from 'react'
import { Memohook } from '../Components/Memohook'
export const Reducerhook = () => {
    // const [count,setCount]=useState(0)
    // const [input,setInput]=useState("")
    // const reducerfunction=(state,action)=>{
    //     console.log("function")
    //     if(action.type==="increment"){
    //         return {
    //             ...state,
    //             count:state.count+1
    //         }
    //     }
    //     else if(action.type==="decrement"){
    //         return {
    //             ...state,
    //             count:state.count-1
    //         }
    //     }
    //     else if(action.type==="input"){
    //         return {
    //             ...state,
    //             input:action.payload
    //         }
    //     }
    //     return state
    // }

    // const [state,dispatch]=useReducer(reducerfunction,{
    //     count:0,
    //     input:""

    // })
    // console.log(state,dispatch)
    // dispatch triggers the action  -> reducer function is called -> state is updated

  return (
   <>
   {/* <div className='text-center'> 
    <p>{state.count}</p>
    <button className='px-3 py-2 border-amber-300 border-2 bg-amber-800' onClick={()=>dispatch({type:"increment"})}>Increment</button>
    <button className='px-3 py-2 border-amber-300 border-2 bg-amber-800' onClick={()=>dispatch({type:"decrement"})}>decrement</button>
  <input type="text" value={state.input} onChange={(e)=>dispatch({type:"input",payload:e.target.value})} className="border-2 border-amber-300"/>
   <h2>{state.input}</h2>
   </div> */}
   <Memohook></Memohook>
   </>
  )
}
