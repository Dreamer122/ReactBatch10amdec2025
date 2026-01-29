import React from 'react'
import './App.css'
import {Home} from './Components/Home'
import { useRef } from 'react'

function App() {
  const obj={
    color:"blue",
    fontSize:"40px",
    fontFamily:"cursive"  
  }
  const name="My react app"
  const ref=useRef(0)
  const inputref=useRef(null)
  // console.log(ref)
  const handleclick=()=>{
    // use ref do not render element
   console.log(ref.current)
   ref.current.innerText="value change"
   ref.current.style.color="red"
  //  inputref.current.value=2
   inputref.current.focus()

  }
  
  console.log("component rendered")

  return (
    // react fragment
    < React.Fragment >
      {/* <h1 style={obj}>Hello World</h1>
      <h2>Welcome to First App</h2> */}
      {/* <h3>{name} </h3> */}
      {/* <Home/> */}

      <h3> use ref hook</h3>
      {/* <button onClick={()=>{ ref.current+=1
        console.log(ref.current)
      }}>
        click me
      </button> */}
      <p ref={ref}>hello this is ref</p>
    <button onClick={handleclick}>click me</button>
    <input type='text' ref={inputref}></input>
    </React.Fragment>
  )
}

export default App

function About(){
  return (
    <h2>About component</h2>
  )
}