import { useState } from "react"
export const useCount=(x)=>{
    const [count,setCount]=useState(0)
    const increase=()=>{
        setCount(count+x)
    }
    return [count,increase]


}