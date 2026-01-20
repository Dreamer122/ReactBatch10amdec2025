import React from 'react'
import { useForm } from 'react-hook-form'
export const Employee = ({SubmitForm}) => {
  const {register,handleSubmit,reset,}= useForm({
    defaultValues:{}
  });

  // const onformSubmit=(data)=>{
  //   console.log("data",data)
  // }
  return (
   <>
   <div className='m-auto w-1/2'>
    <h2> Add new Employee</h2>
    <form onSubmit={handleSubmit(SubmitForm)} className='flex flex-col'>
    <input type="text" {...register("empname")} placeholder='Enter Name' className='border'/> <br/>
    <input type="text" {...register("designation")} placeholder='Enter Position' className='border'/> <br/>
    <input type="number" {...register("salary")} placeholder='Enter Salary' className='border'/> <br/>
    <input type="email" {...register("email")} placeholder='Enter Email' className='border'/> <br/>
    <input type="number" {...register("phone")} placeholder='Enter Phone' className='border'/> <br/>
    <button type='submit' className='py-2 px-3 bg-blue-700 text-white'>Add Employee</button>

    </form>

    </div>
   </>
  )
}
