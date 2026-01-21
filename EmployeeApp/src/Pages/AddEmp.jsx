import React from 'react'
import { Employee } from '../Components/Employee'
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router';
export const AddEmp = () => {
const navigate=useNavigate()


  const addemp=(data)=>{
      fetch("http://localhost:8080/employees",
{
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    method: "POST",
    body: JSON.stringify({
      name:data.name,
      designation:data.designation,
      salary:data.salary,
      email:data.email,
      phone:data.phone
    })
})
.then(function(res){ console.log(res) 
toast.success("Employee Added Successfully")
navigate("/")
})
.catch(function(res){ console.log(res)
toast.error("Error in adding Employee")

 })

  }

  return (
   <>
    <h2> Add new Employee</h2>
   
    <Employee SubmitForm={addemp} isEdit={false}/>
   </>
  )
}
