import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { postCategories } from '../utils/data'
import SunEditor from 'suneditor-react';
import 'suneditor/dist/css/suneditor.min.css'; 
import toast from 'react-hot-toast';
import { useSelector ,useDispatch} from 'react-redux';
import { isLoading } from '../redux/loginSlice';
import { useParams ,useNavigate} from 'react-router';

export const PostForm = ({submitfun,defaultvalue=null,isEdit}) => {
    const {loading}=useSelector((state)=>state.blog)
const navigate=useNavigate()
    const dispatch=useDispatch()
    const {id}=useParams()
    const {register,handleSubmit,watch,setValue,reset}=useForm({
        defaultValues:defaultvalue
    })
    const [prev,setPrev]=useState("")
    const [editorContent, setEditorContent] = useState("")
const thumbnail=watch("thumbnail")
    const handlecontent=(content)=>{
        setEditorContent(content)
        setValue("description",content)

    }

const  blogpost=async(data)=>{
    dispatch(isLoading(true))
  if(isEdit){
    submitfun(defaultvalue.$id,data)
    toast.success("post updated successfully")
  }else{
    submitfun(data,id)
   toast.success("blog post created")
  }
   
   dispatch(isLoading(false))
   navigate(`/dashboard/${id}/`)
}

    useEffect(()=>{
        let file=thumbnail?.[0]
        if(file instanceof File){
            let url=URL.createObjectURL(file)
            console.log(url)
            setPrev(url)
        }
        // else{
        //     setPrev(thumbnail)
        // }
    },[thumbnail])

    useEffect(()=>{
        if(defaultvalue){
            setPrev(defaultvalue.thumbnail)
            setEditorContent(defaultvalue.description) // ✅ important
            // setValue("description", defaultvalue.description)
            reset(defaultvalue)
        }
    },[defaultvalue,reset])
  return (
   <>
   <div>
    <div>
        <form onSubmit={handleSubmit(blogpost)}>
            <input type="text" {...register("title")}   placeholder='enter title' className='border'/> <br />
           <label htmlFor="">thumbnail</label> <br />
            <input type="file" {...register("thumbnail")} id=""  className='border'/> <br />
            {
                prev?<img src={prev} alt="thumbnail"  className='h-16 w-16'/>:""
            }
<label htmlFor="">category</label>
                <input  list='category' {...register("category")} className='border' />
                <datalist id="category">
                    {
                        postCategories.map((cat)=>{
                            return (
                                <option value={cat} key={cat}/>
                            )
                        })
                    }

                </datalist>
<br />
{/*  description */}
<label htmlFor="">Blog Content</label>
 <SunEditor  placeholder="Please type here..."
 onChange={handlecontent}
  setContents={editorContent}   
 height='300px'
 width='500px'
  setOptions={{
            buttonList: [
              ["bold", "italic", "underline", "strike"],
              ["formatBlock", "fontSize", "align", "list"],
              ["link", "image", "video"],
              ["undo", "redo"]
            ]
          }}
 /> <br />

<label htmlFor="">status</label>
<select {...register("status")} id="" className='border'>
    <option value="draft">draft</option>
    <option value="publish">publish</option>
</select> <br />

<input type="submit" disabled={loading}  value={
    isEdit?loading?"updating...":"Update Post":
    loading?"creating...":"create post"
    } className='border' />
        </form>
    </div>
   </div>
   </>
  )
}
