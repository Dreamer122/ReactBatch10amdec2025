import React, { useEffect, useState } from 'react'
import { getuserdata } from '../../appwrite/services'
import {  useParams } from 'react-router'

export const Main = () => {
     const {id}=useParams()
        const [user,setUser]=useState({})
    
        // get userdata
        const get=async()=>
        {
            let users=await getuserdata(id)
            setUser(users[0])

        }
        useEffect(()=>{
           get()
        },[])
  return (
     <div className="flex-1 p-8">

        {/* Top Bar */}
        <div className="flex justify-between items-center mb-10">
          <div>
            <h2 className="text-3xl font-serif text-[#3e2c2c]">
              Welcome Back,{user?.fullname} 👋
            </h2>
            <p className="text-[#7a6c6c]">
              Let your thoughts flow today.
            </p>
          </div>

          <img
          //  src={user?.image? user.image:`https://api.dicebear.com/9.x/fun-emoji/svg?seed=${user?.fullname}`}
           src={user?.image}
            alt="profile"
            className="w-12 h-12 rounded-full object-cover"
          />
        </div>

        {/* Stats Section */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <div className="bg-white rounded-2xl p-6 shadow-md">
            <h4 className="text-sm text-[#7a6c6c]">Total Posts</h4>
            <p className="text-2xl font-semibold text-[#3e2c2c] mt-2">12</p>
          </div>

          <div className="bg-white rounded-2xl p-6 shadow-md">
            <h4 className="text-sm text-[#7a6c6c]">Total Likes</h4>
            <p className="text-2xl font-semibold text-[#3e2c2c] mt-2">245</p>
          </div>

          <div className="bg-white rounded-2xl p-6 shadow-md">
            <h4 className="text-sm text-[#7a6c6c]">Comments</h4>
            <p className="text-2xl font-semibold text-[#3e2c2c] mt-2">89</p>
          </div>
        </div>

        {/* Recent Posts */}
        <div>
          <div className="flex justify-between items-center mb-6">
            <h3 className="text-2xl font-serif text-[#3e2c2c]">
              Recent Diaries
            </h3>

            <button className="bg-[#e8a0a8] text-white px-5 py-2 rounded-full hover:bg-[#d88c94] transition">
              + New Post
            </button>
          </div>

          <div className="space-y-4">

            <div className="bg-white p-5 rounded-xl shadow-sm flex justify-between items-center">
              <div>
                <h4 className="text-lg font-serif text-[#3e2c2c]">
                  Ek Adhoori Kahani
                </h4>
                <p className="text-sm text-[#7a6c6c]">
                  March 3, 2026
                </p>
              </div>

              <div className="space-x-4 text-sm">
                <button className="text-[#e8a0a8] hover:underline">
                  Edit
                </button>
                <button className="text-red-400 hover:underline">
                  Delete
                </button>
              </div>
            </div>

          </div>
        </div>

      </div>

  )
}
