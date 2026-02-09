import { useState,useEffect } from "react";
import { Cartcontext} from "./Cartcontext";
import axios from "axios";
 export const ProviderFunction=({children})=>{
    console.log("child",children)
    const [Alldata,setAllData]=useState([])

    //  get all products
     const getdata=async()=>{
       const res=await axios.get("https://api.escuelajs.co/api/v1/products")
    console.log(res)
    if(res.status==200){
    setAllData(res.data)
    }
    }

    useEffect(()=>{
        getdata()
    },[])

    return(
<>
<Cartcontext.Provider value={{alldata:Alldata}}>
{children}
</Cartcontext.Provider>

</>
    )
 }
