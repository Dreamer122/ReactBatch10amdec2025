import { useEffect ,useState} from 'react'

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
                    {obj.id}
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
                    <a href="#" class="font-medium text-fg-brand hover:underline">Edit</a>
                    <a href="#" class="font-medium text-fg-brand hover:underline">View</a>
                    <a href="#" class="font-medium text-fg-brand hover:underline">Delete</a>
              
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
