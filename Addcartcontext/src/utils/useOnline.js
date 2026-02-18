import { useEffect, useState } from "react"

export const useOnline=()=>{
    const [isonline,setIsOnline]=useState(true)
  
  
    useEffect(()=>{
       window.addEventListener("online",()=>{
        setIsOnline(true)
       }) 
        window.addEventListener("offline",()=>{
        setIsOnline(false)
       }) 

    },[])

return isonline

}