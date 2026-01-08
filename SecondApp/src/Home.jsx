import React,{useEffect,useState} from 'react'
import { Card } from './Card.jsx'
export const Home = () => {

    const [products,setProducts]=useState([])
    const [searchtext,setSearchText]=useState("")
    const [filterProducts,setFilterProducts]=useState([])

//  filter data function
const filterData=(e)=>{
    setSearchText(e.target.value)
    const f=products.filter((prd)=>prd.title.toLowerCase().includes(searchtext.toLowerCase()))
    setFilterProducts(f)

}


//  get api data
const getdata=()=>{
    fetch('https://fakestoreapi.com/products')
  .then(response => response.json())
  .then((data) =>{ 
    setProducts(data)
    setFilterProducts(data)});

} 
useEffect(()=>{
    getdata()
},[])


  return (
    <>
    <div>
    <h2 className='text-4xl'> Home Component</h2>

    <div className='text-center w-3/4 mx-auto my-10 '>
    <input type='text' className='border w-1/2 h-8' onChange={filterData}/>

    </div>
    <div className='flex flex-wrap gap-6 justify-center'>
{filterProducts?.map((prd,i)=>{
    return (
        <Card product={prd} key={prd.id}/>
    )
})}

    </div>
    </div>
    </>
  )
}
