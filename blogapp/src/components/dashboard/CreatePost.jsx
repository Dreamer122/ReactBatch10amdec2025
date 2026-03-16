import React from 'react'
import { PostForm } from '../PostForm'
import {CreateBlog} from "../../appwrite/services"
export const CreatePost = () => {
  return (
    <>
    <div>
        <h2>Create Post</h2>
        <PostForm submitfun={CreateBlog}/>
    </div>
    </>
  )
}
