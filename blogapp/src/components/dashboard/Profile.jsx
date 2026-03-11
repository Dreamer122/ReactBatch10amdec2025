import React, { useEffect, useState } from 'react'
import {  useForm } from 'react-hook-form'
import { getuserdata,updateuserprofile } from '../../appwrite/services'
import { useParams } from 'react-router'
import toast from 'react-hot-toast'
import { useSelector,useDispatch } from 'react-redux'
import { isLoading } from '../../redux/loginSlice'
export const Profile = () => {
  const {loading}=useSelector((state)=>state.blog)
  const dispatch=useDispatch()
  const [defaults,setDefault]=useState({})

  const {register,handleSubmit,watch,reset}=useForm({
    defaultValues:defaults
  })
  const [preview,setpreview]=useState("")
  const {id}=useParams()

const image=watch("image")
// console.log(image[0])

// getuserdata
const get=async()=>{
  const d=await getuserdata(id)
  console.log(d[0])
  setDefault(d[0])

}


useEffect(()=>{

 
  if(image?.[0] instanceof File){
    const filereader=new FileReader()
    filereader.onloadend=()=>{
      // console.log(filereader.result)
      setpreview(filereader.result)
    }

    filereader.readAsDataURL(image[0])
  }

},[image])

useEffect(()=>{
  get()
  
},[])
useEffect(()=>{
   if(defaults?.image){
    setpreview(defaults.image)
  }
  reset(defaults)
},[reset,defaults])

const updateprofile= async(data)=>{
  dispatch(isLoading(true))
    const res=await updateuserprofile(defaults.$id,data)
    console.log(res)
    if(res){

      toast.success("data updated successfully")
    }
    dispatch(isLoading(false))
}

  return (
   <>
   <div>
    <h2 className='text-center'>Edit Profile</h2>
    <div className='mx-auto w-1/2'>
      <form action="" onSubmit={handleSubmit(updateprofile)}>
        <label htmlFor="profilepic">
          Profile Pic
        </label>
        {
          preview?  <img src={preview} alt="" /> :""

       
        }
        <input type="file" {...register("image")} id=""  className='border'/> <br />

        <label htmlFor="fullname">FUll name</label> <br />

        <input type="text"  className='border' {...register("fullname")}  placeholder='fullname'/> <br />
        <label htmlFor="email">email</label> <br />
      
        <input type="email" className='border' {...register("email")} readOnly />

<br />
<label htmlFor="bio">bio</label> <br />
<textarea {...register("bio")} id=""  className='border'>

</textarea>
<br />
<input type="submit" disabled={loading}  value={loading?"updating...":"update profile"} className='bg-pink-400 text-pink-800 rounded px-3 py-2 disabled:bg-pink-200 cursor-pointer'  />
      </form>
    </div>
   </div>
   </>
  )
}
