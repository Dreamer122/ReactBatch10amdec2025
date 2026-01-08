import React from 'react'

export const Card = ({product}) => {
//    const {product}=props
const {id,title,image,price,description}=product
  return (
   <div className="h-auto w-2xs">
    <img src={image} alt={title} style={{height:"200px",width:"100%"}} />
    <h3>{title}</h3>
    <p>{price}</p>
    {/* <p>{description}</p> */}

   </div>
  )
}
