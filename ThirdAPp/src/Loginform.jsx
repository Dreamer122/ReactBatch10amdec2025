import { useState } from 'react'

export const Loginform = () => {
const [email,setEmail]=useState("")
const [password,setPassword]=useState("")



  return (
    <>
    
    <form>
        <input type='email' placeholder='email' onChange={(e)=>{setEmail(e.target.value)
            console.log(email)
        }}/><br/>
        <input type='password' placeholder='password' onChange={(e)=>
            {
        setPassword(e.target.value)
        console.log(password)
            }
        }/><br/>
        <input type='submit' value="Login"/>
    </form>
    </>
  )
}
