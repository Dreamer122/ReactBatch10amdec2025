import React from 'react'
import { Link } from 'react-router'


export const Navbar = () => {
  return (
    <div className='flex justify-between bg-pink-600 text-white px-3 py-2'>
      <p className='text-4xl'> ADdCart</p>  
   <ul className='flex gap-3 text-2xl'>
    <Link to={"/"}>Home</Link>
    <Link to={"/cart"}>Cart</Link>
   </ul>

    </div>
  )
}
