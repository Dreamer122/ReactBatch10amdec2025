import React, { useEffect, useState } from 'react'
import { getData } from '../utils/Commonfunction'
import { useParams,Link } from 'react-router'
import { Productcard } from '../Components/Productcard'
export const Productbycat = () => {
    const [product,setProduct]=useState([])
    const {name,id}=useParams()
    const getcat=async()=>{
   const result= await getData(`https://api.escuelajs.co/api/v1/categories/${id}/products`)
   console.log(result)
   setProduct(result.data)
}

useEffect(()=>{
    getcat()
},[id])
if(product.length==0){
    return <p>Loading products....</p>
}

  return (
   <>
   {
    product?.map((prd)=>{
        return (
          <Link key={prd.id} to={`/category/${name}/${id}/${prd.slug}/${prd.id}`} >  <Productcard prd={prd} /> </Link>
        )
    })
   }
   </>
  )
}
