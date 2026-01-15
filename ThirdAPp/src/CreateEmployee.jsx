import React from 'react'
import { useForm } from 'react-hook-form'

export const CreateEmployee = () => {
  const obj=  useForm({
    mode:"onChange"
  });
  console.log(obj)
  const {register,handleSubmit,formState:{errors}}=obj

  const submitform=(data)=>{
    console.log(data)
  }

//    maxlength 
// min , max
  return (
    <div>
        <h2> Create Employee</h2>
<form onSubmit={handleSubmit(submitform)}>
    <input type="text" {...register("employeename",{
        required:{
            value:true,
            message:"Name is required"
        },
        minLength:{
            value:2,
            message:"Minimum 2 characters required"
        }
    })}  placeholder="Employee Name"/>
    {errors.employeename && <span style={{color:"red"}}>{errors.employeename.message}</span>}
    
     <br/>
    <input type="text" {...register("email",{
        pattern:{
            value:/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
            message:"Invalid email format"
        },
        required:{
            value:true,
            message:"Email is required"
        }
    })} placeholder="Employee email"/> 
    {errors.email && <span style={{color:"red"}}>{errors.email.message}</span>}
<br/>
    <input type="text" {...register("employeeid")} placeholder="Employee ID"/> <br/>
    <input type="text" {...register("employeedesignation")}  placeholder="Employee Designation"/> <br/>
    <input type="text" {...register("employeesalary")}  name="employeesalary" placeholder="Employee Salary"/> <br/>
    <button type="submit"> Create Employee</button>

    </form>
    </div>
   
  )
}

