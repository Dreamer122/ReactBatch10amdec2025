import React,{useEffect,useState} from 'react'
import { useParams } from 'react-router'
import { getdata } from '../utils/getData';
export const ViewEmp = () => {
    const {id,name}=useParams();
    console.log(id,name);
    const [empdata,setEmpdata]=useState({});

    useEffect(()=>{
        const callgetdata=async()=>{
             const result= await getdata(id);
       console.log(result)
            setEmpdata(result);
        }   
        
        callgetdata();
      
    },[])
  return (
   <>
   <div>
<h2> View Employee Details

</h2>
<div class="w-1/2 m-auto mt-10 p-6 border border-gray-300 rounded-lg shadow-lg bg-white">
<p>{empdata.name}</p>
<p>{empdata.designation}</p>
<p>{empdata.salary}</p>
<p>{empdata.email}</p>
<p>{empdata.phone}</p>
</div>

   </div>
   </>
  )
}
