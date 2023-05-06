import React from 'react'

const Product = ({id,title,price}) => {
  return (
    <li>
        {id} : {title} with {price}
    </li>
  )
}

export default Product