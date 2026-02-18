import React ,{useState} from 'react'
import { lazy,Suspense } from 'react'
import { useCount } from '../utils/useCount'
const Dummy=lazy(()=>import("./Dummy"))
export const Service = () => {
    const [count,increase]=useCount(2)
    const [show,setShow]=useState(false)
  return (
   <>
   <h1>Service Page</h1>
   <p>Count: {count}</p>
   <button className='px-3 py-2 rounded bg-black text-white' onClick={increase}>Increase</button>
   {
    show? <Suspense fallback={<p>loading....</p>}> <Dummy></Dummy> </Suspense>:""
   }
   <button className='px-3 py-2 rounded bg-blue-600 text-white' onClick={()=>setShow(true)}>Toggle Dummy</button>
    

  
   </>
  )
}
