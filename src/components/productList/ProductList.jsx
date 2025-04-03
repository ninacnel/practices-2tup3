import React from 'react'
import ProductItem from '../productItem/ProductItem';


const ProductList = ({products, dollar}) => {
  return (
    <>
     {products.map((product) => (
        <ProductItem
        dollar={dollar}
        name={product.name}
        price={product.price}
        details={product.details}
        />
     ))}
    </>
  )
}

export default ProductList