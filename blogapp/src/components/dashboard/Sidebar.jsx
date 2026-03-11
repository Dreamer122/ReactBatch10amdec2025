import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router'
export const Sidebar = () => {
    const {session}=useSelector((state)=>state.blog)
  return (

    <div  className="w-64 min-h-screen  bg-white shadow-lg p-6  md:block">
        <h1 className="text-2xl  font-serif text-[#3e2c2c] mb-10">
          Dil Se Diary
        </h1>

        <nav  className="space-y-4 text-[#3e2c2c]">
          <Link to={`/dashboard/${session?.userId}/`} className="block hover:text-[#e8a0a8]">Dashboard</Link>
          <Link href="#" className="block hover:text-[#e8a0a8]">My Posts</Link>
          <Link href="#" className="block hover:text-[#e8a0a8]">Create Post</Link>
          <Link to={`/dashboard/${session?.userId}/profile`} className="block hover:text-[#e8a0a8]">Profile</Link>
          <Link href="#" className="block text-red-400 hover:underline">Logout</Link>
        </nav>
      </div>
  )
}

