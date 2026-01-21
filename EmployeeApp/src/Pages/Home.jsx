import { useEffect ,useState} from 'react'
import { Link } from 'react-router'

export const Home = () => {
    const [emp,setEmp]=useState([])

    const getAllemployees= async()=>{
       const res=await fetch("http://localhost:8080/employees")
       const data=await res.json()
         console.log(data);
         setEmp(data)
    }

    useEffect(()=>{
        getAllemployees()
    },[])
    
  return (
    <>
    <div>
<h2> All Employees</h2>
{/*  table start */}



<div class="relative w-3/4 m-auto overflow-x-auto bg-neutral-primary-soft shadow-xs rounded-base border border-default">
    <table class="w-full text-sm text-left rtl:text-right text-body">
        <thead class="bg-neutral-secondary-soft border-b border-default">
            <tr>
                <th scope="col" class="px-6 py-3 font-medium">
                   Emp id
                </th>
                <th scope="col" class="px-6 py-3 font-medium">
                    Employee Name
                </th>
                <th scope="col" class="px-6 py-3 font-medium">
                    Position
                </th>
                <th scope="col" class="px-6 py-3 font-medium">
                    Salary
                </th>
               
                <th scope="col" class="px-6 py-3 font-medium">
email               
 </th>
                <th scope="col" class="px-6 py-3 font-medium">
                    Action
                </th>
            </tr>
        </thead>
        <tbody>

            {
                emp.map((obj,index)=>{
                    return(

                                    <tr class="odd:bg-neutral-primary even:bg-neutral-secondary-soft border-b border-default">
                <th scope="row" class="px-6 py-4 font-medium text-heading whitespace-nowrap">
                    {index+1}
                </th>
                <td class="px-6 py-4">
                {obj.name}
                </td>
                <td class="px-6 py-4">
                    {obj.designation}
                </td>
                <td class="px-6 py-4">
                    {obj.salary}
                </td>
               
                <td class="px-6 py-4">
                    {obj.email}
                </td>

                <td class="px-6 py-4">
                    <Link to={`/editemployee/${obj.id}`} class="font-medium text-fg-brand py-2 px-3 rounded bg-violet-600 text-white font-bold mx-2 ">Edit</Link>
                    <Link to={"/viewemployee"} class="font-medium text-fg-brand py-2 px-3 rounded bg-green-600 text-white font-bold mx-2 ">View</Link>
                    <Link  class="font-medium text-fg-brand py-2 px-3 rounded bg-red-600 text-white font-bold mx-2 ">Delete</Link>
              
                </td>
            </tr>
            
                     
                    )
                })
            }
        
        </tbody>
    </table>
</div>



{/* end  */}
 
   </div>
    </>
  )
}
