import React, { useState } from 'react'
import { useSelector ,useDispatch} from 'react-redux'
import { deleteTodo, updateTodo } from '../app/todoSlice'
export const TodoList = () => {
    const {todoreducer}=useSelector((state)=>state)
    const dispatch=useDispatch()
    // console.log(s.todoreducer)
    const [edittask,setEdittask]=useState({})
    console.log(todoreducer)

    const deleteTask=(id)=>{
        console.log(id)
        dispatch(deleteTodo(id))
    }
    const savetask=()=>{
        // console.log(edittask)
       dispatch(updateTodo(edittask))
        setEdittask({})
    }
  return (
   <>
   <div className='bg-purple-200 p-5'>
    <ul>

{
    todoreducer?.map((v)=>{
        return (
            
                v.id!=edittask.id?
                <li className='flex gap-3' key={v.id}><span> {v.text} </span>

    <button className='px-3 py-2 bg-blue-400 text-white' onClick={()=>setEdittask(v)}>Edit</button> 
    <button onClick={()=>deleteTask(v.id)} className='bg-red-400 text-white px-3 py-2'>delete</button></li>
:
    <li className='flex gap-3' key={v.id}>
        <input type="text" value={edittask.text} 
         onChange={(e)=>setEdittask({...edittask,text:e.target.value})}/>

    <button className='px-3 py-2 bg-green-400 text-white' onClick={savetask}>save</button> 
    <button onClick={()=>deleteTask(v.id)} className='bg-red-400 text-white px-3 py-2'>delete</button></li>


            

        )
    })
}
    </ul>

   </div>
   </>
  )
}
