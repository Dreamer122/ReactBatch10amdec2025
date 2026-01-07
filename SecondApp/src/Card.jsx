import React from 'react'

export const Card = ({product}) => {
//    const {product}=props
const {id,title,image,price,description}=product
  return (
   <div className='product_card'>
    <img src={image} alt="product image" style={{height:"200px",width:"100%"}} />
    <h3>{title}</h3>
    <p>{price}</p>
    {/* <p>{description}</p> */}

   </div>
  )
}
