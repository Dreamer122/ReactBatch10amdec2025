import React, { useState } from 'react'
import { Home } from './Pages/Home'
import { BrowserRouter ,Routes,Route} from 'react-router'
import { Navbar } from './Components/Navbar'
import { Footer } from './Components/Footer'
import { CartPage } from './Pages/CartPage'
import { PrdDesc } from './Pages/PrdDesc'
import { ErrorPage } from './Pages/ErrorPage'
import { Productbycategory } from './Pages/Productbycategory'
import toast from 'react-hot-toast'
import { Toaster } from 'react-hot-toast'
 const App = () => {

  const [cart,setCart]=useState([])
const addCart=(prd)=>{
 const res= cart.find((obj)=>prd.id==obj.id)
 if(res){
  toast.error("already added to cart")
 }
 else{

   setCart([...cart,prd])
   toast.success("product successfully added to cart")
 }
}

// increase
const incquantity=(prd)=>{
  const newarray=cart.map((obj)=>{
    if(obj.id==prd.id){
      prd.qty=prd.qty+1
      return prd
    }
    else{
      return obj
    }
  })
  setCart([...newarray])

}

const decquantity=(prd)=>{
  const newarray=cart.map((obj)=>{
    if(obj.id==prd.id){
      if(prd.qty>1){

        prd.qty=prd.qty-1
        return prd
      }
      else{
        prd.qty=1
        return prd
      }
    }
    else{
      return obj
    }
  })
  setCart([...newarray])

}
// remove product
const removeproduct=(id)=>{
  const array=cart.filter((obj)=>obj.id!=id)
  setCart([...array])
}


  return (
   <BrowserRouter>
   <Navbar length={cart.length}></Navbar>
   <Routes>
    <Route path='/' element={<Home addcart={addCart}/>}>

    </Route>
    <Route path='/cart' element={<CartPage cart={cart} incquantity={incquantity} decquantity={decquantity} removeproduct={removeproduct}/>}>

    </Route>
    <Route path='/description/:id/:title' element={<PrdDesc addcart={addCart}/>}>

    </Route>
    <Route path='/category/:cat/:id' element={<Productbycategory/>}>

    </Route>
    <Route path='/*' element={<ErrorPage/>}>

    </Route>
   </Routes>
   <Footer/>
   <Toaster position="top-right"/>
   </BrowserRouter>
  )
}

export default App