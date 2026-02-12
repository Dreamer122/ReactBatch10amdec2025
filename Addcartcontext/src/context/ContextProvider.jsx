import { useState,useEffect } from "react";
import { Cartcontext} from "./Cartcontext";
import axios from "axios";
import toast from "react-hot-toast";
 export const ProviderFunction=({children})=>{
    // console.log("child",children)
    const [Cart,setCart]=useState([])

    const addCart=(prd)=>{
 const res= Cart.find((obj)=>prd.id==obj.id)
 if(res){
    toast.error("product already added to cart")
 }
 else{
    prd={...prd,qty:1}

     setCart([...Cart,prd])
     toast.success("product added to cart")
 }
    }
   
// increase qty

const incquantity=(prd)=>{
  const newarray=Cart.map((obj)=>{
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
  const newarray=Cart.map((obj)=>{
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
  const array=Cart.filter((obj)=>obj.id!=id)
  setCart([...array])
}

    return(
<>
<Cartcontext.Provider value={{Cart,setCart,addCart,incquantity,decquantity,removeproduct}}>
{children}
</Cartcontext.Provider>

</>
    )
 }
