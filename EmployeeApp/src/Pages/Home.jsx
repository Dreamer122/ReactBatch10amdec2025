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

  <table border={1} style={{width:"80%",margin:"auto"}}>
    <thead>
        <tr>
            <th>Employee Name</th>
            <th>Employee Email</th>
            <th>Employee ID</th>
            <th>Employee Designation</th>
            <th>Employee Salary</th>
            <th>Actions</th>
        </tr>
        </thead>
        <tbody>
            {
                emp.map((obj,index)=>{
                    return(
                        <tr key={obj.id}>
                            <td>{obj.name}</td>
                            <td>{obj.email}</td>
                            <td>{obj.id}</td>
                            <td>{obj.designation}</td>
                            <td>{obj.salary}</td>
                            <td>
                                <button> Edit </button>
                                <button> Delete </button>
                                <button> View </button>
                            </td>
                        </tr>
                    )
                })
            }
            </tbody>
            
                </table>


    </div>
    </>
  )
}
