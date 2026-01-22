import React ,{useEffect,useState} from 'react'
import { useParams ,useNavigate} from 'react-router'
import { Employee } from '../Components/Employee'
import toast from 'react-hot-toast';
import { getdata } from '../utils/getData';

export const EditEmp = () => {
  const {id}=useParams()
  const navigate=useNavigate()
  // console.log(obj)
  const [empdata,setEmpdata]=useState({})

  // get user data 
  const getEmployee=async()=>{
    const data=await getdata(id);
    setEmpdata(data)
  }
  useEffect(()=>{
    getEmployee()
  },[])

  // edit employee
  // get, post,put,delete
  const EditEmployee=(data)=>{
    fetch(`http://localhost:8080/employees/${id}`,{
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      method: "PUT",
      body: JSON.stringify({
        name:data.name,
        designation:data.designation,
        salary:data.salary,
        email:data.email,
        phone:data.phone
      })
    }).then(function(res){ console.log(res)
      toast.success("Employee Edited Successfully")
      navigate("/")
     })
    .catch(function(res){ console.log(res) 
      toast.error("Error in editing Employee")
    })
  }
  return (
    <div>
      <h2> Edit Employee</h2>
      <Employee defaultValue={empdata}  isEdit={true} SubmitForm={EditEmployee}/>
    </div>
  )
}
