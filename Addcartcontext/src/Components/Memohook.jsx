import React from 'react'
import { useState,useMemo } from 'react'
import { Parent } from './Parent'

export const Memohook = () => {
//     const [count,setCount]=useState(0)
//     const [input,setInput]=useState(0)
//     console.log("component rendered")

//     const sum=(x)=>{
//         console.log("sum function")
//         let s=x
//         // return s+1
//         for(let i=0;i<1000000;i++){
//             s=s+1
//         }
//         return s

//     }
//     const s=useMemo(()=>{
//      return sum(input)
//     },[input])
//   return (
//    <>
//    <h2>{count}</h2>
//     <button className='px-3 py-2 border-amber-300 border-2 bg-amber-800' onClick={()=>setCount(count+1)}>Increment</button>
//    <h3>{s}</h3>
//    <input type="number" value={input} onChange={(e)=>setInput(e.target.value)} className='border-2 border-amber-300'/>
   
   
//    </>
return(
<Parent/>
)
  
}
