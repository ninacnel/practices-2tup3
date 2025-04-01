import React, { useState } from 'react'

const ProductItem = ({ name, price, details }) => {
    const [available, setAvailable] = useState(true);

    return (
        <div className='product-item'>
            <h2>{name}</h2>
            <h3>${price}</h3>
            <p>{details}</p>
            <p>Stock: {available ? "Available" : "Unavailable"}</p>
            <button onClick={() => setAvailable(!available)}>Change stock</button>
        </div>
    )
}

export default ProductItem