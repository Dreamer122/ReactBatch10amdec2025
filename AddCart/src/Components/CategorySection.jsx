import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router'

export const CategorySection = () => {

    const [Cat,setCat]=useState([])

    const getallCategories= async()=>{
        const res=await  axios.get("https://api.escuelajs.co/api/v1/categories")
        console.log(res)
        setCat(res.data)

    }
    useEffect(()=>{
        getallCategories()
    },[])
  return (
   <>
   <h3> ALl Categories</h3>
   <div className='flex justify-center gap-4 flex-wrap'>

{
Cat?.map((obj,i)=>{
    return (
      <Link key={obj.id} to={`/category/${obj.slug}/${obj.id}`}>
        <div  className='h-60 w-56 p-2 rounded '>
            {obj.image?
            <img src={obj.image} alt={obj.name}></img>
            
            :""}
            <p>{obj.name}</p>
        </div>
        </Link>
    )
})
}
   </div>

   </>
  )
}
