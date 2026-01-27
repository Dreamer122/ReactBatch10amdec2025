import React, { useEffect } from 'react'
import { useParams } from 'react-router'
import axios from 'axios'
export const Productbycategory = () => {
    const {cat,id}=useParams()
 const getdatabycat=async()=>{
       const res=await axios.get(`https://api.escuelajs.co/api/v1/categories/${id}/products`)
    console.log(res.data)
    }
    useEffect(()=>{
        getdatabycat()
    },[])

  return (
 <>
 
 
 </>
  )
}
