import React, { useEffect } from 'react'
import { useForm } from 'react-hook-form'
export const Employee = ({SubmitForm,defaultValue,isEdit}) => {
  const {register,handleSubmit,reset,}= useForm({
    defaultValues:defaultValue || {
      name:"",
      designation:"",
      salary:"",
      email:"",
      phone:""
    }
  });

  useEffect(()=>{
    if(defaultValue){
      reset(defaultValue)
    }
  },[defaultValue,reset])

  
  return (
   <>
   <div className='m-auto w-1/2'>
    <form onSubmit={handleSubmit(SubmitForm)} className='flex flex-col'>
    <input type="text" {...register("name")} placeholder='Enter Name' className='border'/> <br/>
    <input type="text" {...register("designation")} placeholder='Enter Position' className='border'/> <br/>
    <input type="number" {...register("salary")} placeholder='Enter Salary' className='border'/> <br/>
    <input type="email" {...register("email")} placeholder='Enter Email' className='border'/> <br/>
    <input type="number" {...register("phone")} placeholder='Enter Phone' className='border'/> <br/>
    <button type='submit' className='py-2 px-3 bg-blue-700 text-white'> {isEdit?"Edit Employee":"Add Employee"}</button>

    </form>

    </div>
   </>
  )
}
