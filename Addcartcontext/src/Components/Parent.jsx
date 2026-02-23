import React, { useState ,useCallback} from 'react'
import { Child } from './Child'

export const Parent = () => {
    const [count,setCount]=useState(0)
    const [b,setb]=useState(1)
    console.log("parent rendered")
    // const get=()=>{
    //     console.log("get function called")
    // }
 const get= useCallback(()=>{
        console.log("get function called",b)
    },[b])

    // refrence 101,102 freeze
  return (
   <>
   <h1> Parent</h1>
   <button className='px-3 py-2 rounded bg-black text-white' onClick={()=>setCount(count+1)}>click</button>
   <h2>{count}</h2>
   <button className='px-3 py-2 text-green-500 bg-amber-200' onClick={()=>{setb(count+1)
    console.log("b=",b)
   }}>update b</button>

   <Child a={"hello"} get={get}/>
   </>
  )
}
