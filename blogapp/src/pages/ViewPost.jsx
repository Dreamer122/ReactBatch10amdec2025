import React, { useEffect, useState } from 'react'
import { getsinglepost } from '../appwrite/services'
import { useParams } from 'react-router'

export const ViewPost = () => {
  const {postid}=useParams()
  const [post,setPost]=useState({})
  const getpost=async()=>{
   const d=await getsinglepost(postid)
   console.log(d)
   setPost(d)
  }

  const converthtml=(data)=>{
    return {__html:data}
  }
  useEffect(()=>{
    getpost()
  },[postid])
  return (
   <>
   <h2>{post?.title}</h2>
   <img src={post?.thumbnail} alt="" className='w-full h-56' />
 <h3>{post?.category}</h3>
 <div dangerouslySetInnerHTML={converthtml(post?.description)}>

 </div>
   </>
  )
}
