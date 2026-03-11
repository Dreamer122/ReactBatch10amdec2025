import { Outlet, } from 'react-router'
import { Sidebar } from '../components/dashboard/Sidebar'
export const Dashboard = () => {
   
  return (
 
        
 <div className="min-h-screen bg-[#fdf6f0] flex">

      {/* Sidebar */}
     <div className=''>
        <Sidebar></Sidebar>
     </div>
     <div className='flex-1'>

        <Outlet/>
     </div>

      {/* Main Content */}
    

    </div>




  )
}
