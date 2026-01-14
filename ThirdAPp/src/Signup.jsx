import React, { useState } from 'react'
import { ImCross } from "react-icons/im";
export const Signup = () => {
    const [formdata,setFormData]=useState({
        firstname:"",
        lastname:"",
        email:"",
        password:""
    })
    const [errors,setErrors]=useState({
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
    validate(name,value)
    // console.log(formdata)
   }

   const handleSubmit=(e)=>{
    e.preventDefault()
    console.log("form submittted",formdata)
   }


//    validation function
const validate=(name,value)=>{
if(name=="firstname"){
    if(value.length==0){
        setErrors({
            ...errors,
            firstname:"firstname is required"
        })
    }
    else if(value.length<2){
         setErrors({
            ...errors,
            firstname:"firstname should be at least 2 characters"
        })
    }
    else{
        setErrors({
            ...errors,
            firstname:""
        })
    }
}
else if(name=="lastname"){
    if(value.length==0){
        setErrors({
            ...errors,
            lastname:"lastname is required"
        })
    }
    else if(value.length<2){
         setErrors({
            ...errors,
            lastname:"lastname should be at least 2 characters"
        })
    }
    else{
        setErrors({
            ...errors,
            lastname:""
        })
    }
}
else if(name=="email"){
    var regex_email=/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
    if(!value.match(regex_email)){
        setErrors({
            ...errors,
            email:"Invalid email format"
        })
    }
    else{
        setErrors({
            ...errors,
            email:""
        })
    }
        
    }
else if(name=="password"){
    const regex_password=/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{5,15}$/
    if(!value.match(regex_password)){
        setErrors({
            ...errors,
            password:"Password must be 5-15 characters long, contain at least one uppercase letter, one lowercase letter, one digit, and one special character."
        })
    }
    else{
        setErrors({
            ...errors,
            password:""
        })
    }
}
}

  return (
    <>
    <form onSubmit={handleSubmit}>

        <input type='text' placeholder='firstname' name='firstname' onChange={handleInput}/>
{errors.firstname &&<span style={{color:"red"}}>{errors.firstname}  <ImCross /></span>}
        <br/>
        <input type='text' placeholder='lastname' name='lastname' onChange={handleInput}/>
{errors.lastname &&<span style={{color:"red"}}>{errors.lastname}</span>}
        
        <br/>
       
        <input type='email' placeholder='email' name='email' onChange={handleInput}/>
        {errors.email &&<span style={{color:"red"}}>{errors.email}</span>}
        <br/>
       
        <input type='password' placeholder='password' name='password' onChange={handleInput}/>
        {errors.password &&<span style={{color:"red"}}>{errors.password}</span>}
        
        <br/>
        
        <input type='submit' value="Signup"/>

    </form>
    </>
  )
}
