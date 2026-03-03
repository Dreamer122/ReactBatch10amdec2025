import React, { useState } from 'react'
import { addTodo } from '../app/todoSlice'
import { useDispatch } from 'react-redux'
export const Todoinput = () => {
    const dispatch=useDispatch()
    const [text,setText]=useState("")
    const createtodo=()=>{
        dispatch(addTodo(text))
        setText("")
    }
  return (
    <>
    <div className='flex gap-5'>

    <input type='text' value={text} placeholder='enter todo' className='border' onChange={(e)=>setText(e.target.value)} />
    <button onClick={createtodo} className='px-3 py-2 bg-purple-400 text-white'>add todo</button>
    </div>

    </>
  )
}
