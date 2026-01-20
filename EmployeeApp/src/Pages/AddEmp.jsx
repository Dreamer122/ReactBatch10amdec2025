import React from 'react'
import { Employee } from '../Components/Employee'
export const AddEmp = () => {

  const addemp=(data)=>{
      fetch("http://localhost:8080/employees",
{
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    method: "POST",
    body: JSON.stringify({
      name:data.empname,
      designation:data.designation,
      salary:data.salary,
      email:data.email,
      phone:data.phone
    })
})
.then(function(res){ console.log(res) })
.catch(function(res){ console.log(res) })

  }

  return (
   <>
   
    <Employee SubmitForm={addemp}/>
   </>
  )
}
