import React from 'react'
import Product from './Product'
const ProductList = ({products}) => {
  return (
    <ul>
        {products.map(({id,title,price})=>(
            <Product key={id} id={id} title={title} price={price}/>
        ))}
    </ul>
  )
}

export default ProductList