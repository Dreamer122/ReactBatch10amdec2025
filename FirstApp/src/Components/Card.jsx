import React from 'react'

export const Card = (props) => {
    console.log(props)
    // {
    //   title:"React",
    //   content:""
    // }
  return (
  <>
    <div className="card">
        <img src={props.thumbnail} alt='thumnail' style={{height:"100px"}}/>
      <h2>{props.title}</h2>
      <p>{props.content}</p>
    </div>
  </>
  )
}


function sum(a,b){
  return a+b
}
