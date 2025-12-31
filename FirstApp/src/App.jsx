import React from 'react'
import './App.css'
import {Home} from './Components/Home'

function App() {
  const obj={
    color:"blue",
    fontSize:"40px",
    fontFamily:"cursive"  
  }
  const name="My react app"
  

  return (
    // react fragment
    < React.Fragment >
      {/* <h1 style={obj}>Hello World</h1>
      <h2>Welcome to First App</h2> */}
      <h3>{name} </h3>
      <Home/>
    
    </React.Fragment>
  )
}

export default App

function About(){
  return (
    <h2>About component</h2>
  )
}