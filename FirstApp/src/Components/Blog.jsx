import React from 'react'
import { Card } from './Card'

export const Blog = () => {
  const array=["React","Javascript","Html","Css"]
  const array_of_content=[
    {
    thumbnail:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRomZIYNNwXaCrCmWJdDsOuu-uzLUQg3Ov7XQ&s",
    title:"React",
    content:"React is a JavaScript library for building user interfaces"
    },
  {
    thumbnail:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTgn6z2aIvs85ydEtMsy2o2fUa9Fk1ekT56A&s",
    title:"Javascript",
    content:"javacsript makes our webpage partial dynamic"
  }]
  return (
    <div >
      <h2 className='blog'>Blogs</h2>
      <div className='cardbox'>

   <Card title="React" content="React is a JavaScript library for building user interfaces"/>
   <Card title="Javascript" content="javacsript makes our webpage partial dynamic"/>
   <Card title="Html" content="html is a markup language"/>
   <Card title={array[0]} content="it makes our webpage attractive"/>
   <Card title={array[1]} content="it makes our webpage attractive"/>
   <Card title={array[2]} content="it makes our webpage attractive"/>


      </div>
      <div>
        <h3>Mapping card through array  hello</h3>
{/*  mapping an array */}
{
  array_of_content.map((v,i)=>{
    return(
    <Card title={v.title} content={v.content} thumbnail={v.thumbnail} key={i}/>)
  })
}
      </div>
    </div>
  )
}
