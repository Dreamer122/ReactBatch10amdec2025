import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { CategoryCard } from './Components/CategoryCard'

export const Home = () => {
  const [cat,setCat]=useState([])
  // get all categories
  const getCategories=async()=>{
    const result=await axios.get("https://api.escuelajs.co/api/v1/categories")
    console.log(result)
    if(result.status==200){
      setCat(result.data)
    }
  }

  useEffect(()=>{
    getCategories()
  },[])
    
  return (
    <>
    <div>
      <h3 className='text-center text-4xl text-bold'> All Categories</h3>
   <div className='flex flex-wrap gap-4'>


      {
        cat?.map((c)=>{
          return (
  <CategoryCard c={c} key={c.id}/>
          )

        })
      }
   </div>

      </div>

    </>
   
  )
}
