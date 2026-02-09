import React from 'react'
import { useContext } from 'react'
import { Cartcontext } from './context/Cartcontext'
export const Home = () => {
    const a=useContext(Cartcontext)
    console.log("home page",a)
    if(a.alldata.length==0){
        return <p> loading...</p>
    }
  return (
    <>
    <h1> home page</h1>
    </>
   
  )
}
