import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Card } from '../Components/Card';
import { CategorySection } from '../Components/CategorySection';
export const Home = () => {
    const [Alldata,setAllData]=useState([]);

    const getdata=async()=>{
       const res=await axios.get("https://api.escuelajs.co/api/v1/products")
    console.log(res.data)
    setAllData(res.data)
    }
    useEffect(()=>{
        getdata()
    },[])


  return (
<>
<CategorySection/>



<h2  className='text-center text-4xl text-pink-700 my-4'> All Products</h2>
<div className='flex flex-wrap justify-center w-11/12 mx-auto'>

{
    Alldata?.map((prd,i)=>{
        return (
            <Card prd={prd} key ={prd.id}/>
        )

    })
}
</div>


</>
)
}
