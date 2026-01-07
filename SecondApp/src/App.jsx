import React,{useEffect,useState} from 'react'
import { Card } from './Card.jsx'
import './App.css'

 const App = () => {
  const [count,setCount]=useState(0)
  const [Alldata,setAllData]=useState()


  // api
  

  const fetchdata=async()=>{
    const res=await fetch("https://fakestoreapi.com/products")
    const data=await res.json()
    console.log("all data",data)
    setAllData(data)

    console.log("fetching data...")
  }
//  useEffect hook -> callback function,dependency array[]
// [] -> on load 
// [variable]-> on this variable change
console.log("before useEffect")
  useEffect(()=>{
    fetchdata()
  },[])

console.log("after useEffect")

  return (
    <>
<h2> hello Use useEffect</h2>
<p>count value is : {count}</p>
<button onClick={()=>setCount(count+1)}>increment</button>

{/* mapping  */}
<div>
  <h2> All Products</h2>
<div className='main'>

{
  Alldata?.map((prd)=>{
    return(
      <Card product={prd} key={prd.id}/>
    )
  })

}
</div>
</div>


    {/* 
    desctructuring
    useEffect hook
    */}
    </>
  )
}
export default App
