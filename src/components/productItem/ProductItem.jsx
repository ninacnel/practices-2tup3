import React from 'react'

const ProductItem = (props) => {
    return (
        <div>
            <h2>{props.name}</h2>
            <h3>${props.price}</h3>
            <p>{props.details}</p>
            <p>{props.dollar}</p>
        </div>
    )
}

export default ProductItem