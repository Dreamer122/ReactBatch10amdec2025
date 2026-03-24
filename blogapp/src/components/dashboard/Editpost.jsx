import React, { useEffect, useState } from 'react'
import { PostForm } from '../PostForm'
import {updatesinglenpost,getsinglepost} from "../../appwrite/services"
import { useParams } from 'react-router'
export const Editpost = () => {
    const {postid}=useParams()
    const [singlePost,setSinglePost]=useState({})

    const updatepost=(docid,data)=>{
        updatesinglenpost(docid,data)
    }
    const getpostdata= async()=>{
       let data=await getsinglepost(postid)
       console.log(data)
       setSinglePost(data)
    }
    useEffect(()=>{
        getpostdata()
    },[])
  return (
   <>
   <h2>Edit post</h2>
   <PostForm submitfun={updatepost} isEdit={true} defaultvalue={singlePost}></PostForm>
   </>
  )
}
