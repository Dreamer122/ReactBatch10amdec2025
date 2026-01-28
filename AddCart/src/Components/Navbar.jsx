import React from 'react'
import { Link } from 'react-router'
import { FaCartShopping } from "react-icons/fa6";


export const Navbar = ({length}) => {
  return (
    <div className='flex justify-between bg-pink-600 text-white px-8 py-4'>
      <p className='text-4xl'> ADdCart</p>  
   <ul className='flex gap-3 text-2xl'>
    <Link to={"/"}>Home</Link>
    <Link to={"/cart"} className='flex relative'><FaCartShopping className='mt-2 z-10' /> <span className='absolute bg-pink-300 text-pink-700 block px-3  rounded left-5 bottom-3'>
      {length}
      </span></Link>
   </ul>

    </div>
  )
}
