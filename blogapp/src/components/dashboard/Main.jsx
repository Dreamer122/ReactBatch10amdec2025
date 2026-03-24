import React, { useEffect, useState } from 'react'
import { getuserdata,getalluserpost ,deletePost} from '../../appwrite/services'
import {  Link, useParams } from 'react-router'
import toast from 'react-hot-toast'

export const Main = () => {
     const {id}=useParams()
        const [user,setUser]=useState({})
        const [posts,setPosts]=useState([])
    
        // get userdata
        const get=async()=>
        {
            let users=await getuserdata(id)
            setUser(users[0])
        let userposts=await getalluserpost(id)
          setPosts(userposts.rows)
      
          }

          // delete post
          const deleteblogpost=(id)=>{
            const check=confirm("are you sure?")
            if(check){

              deletePost(id)
              get()
              toast.success("post deleted successfully")
            }

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

           {/* posts */}
            {
              posts?.map((p,i)=>{
                return (
           <div key={p.$id}>
 <img src={p?.thumbnail} alt="" className="h-16 w-16 rounded full" />
          <p>{p?.category}</p>
          <p>{p?.title}</p>
          <div>
            <Link to={`/dashboard/${id}/editpost/${p.$id}`} className='px-3 py-2 rounded bg-blue-500 text-white' >Edit </Link>
            <Link to={`/post/${p.$id}/${p.category}`} className='px-3 py-2 rounded bg-green-500 text-white'  >View </Link>
            <button onClick={()=>deleteblogpost(p.$id)} className='px-3 py-2 rounded bg-red-500 text-white' >Delete</button>
          </div>
           </div>
                )
              })
            }
           

          </div>
        </div>

      </div>

  )
}
