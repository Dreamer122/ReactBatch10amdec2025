import React, { useState } from 'react'

export const Signup = () => {
    const [formdata,setFormData]=useState({
        firstname:"",
        lastname:"",
        email:"",
        password:""
    })

   const handleInput=(e)=>{
    // console.log(e.target.name)
    // console.log(e.target.value)
    let name=e.target.name // firstname
    let value=e.target.value
    setFormData({
        ...formdata,
        [name]:value
    })
    // console.log(formdata)
   }

   const handleSubmit=(e)=>{
    e.preventDefault()
    console.log("form submittted",formdata)
   }

  return (
    <>
    <form onSubmit={handleSubmit}>

        <input type='text' placeholder='firstname' name='firstname' onChange={handleInput}/><br/>
        <input type='text' placeholder='lastname' name='lastname' onChange={handleInput}/><br/>
        <input type='email' placeholder='email' name='email' onChange={handleInput}/><br/>
        <input type='password' placeholder='password' name='password' onChange={handleInput}/><br/>
        <input type='submit' value="Signup"/>

    </form>
    </>
  )
}
