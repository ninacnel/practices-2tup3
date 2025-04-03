import React, { useState } from 'react'

const ProductItem = ({ name, price, details, dollar }) => {
    const [available, setAvailable] = useState(true);

    const priceUpdated = price * dollar;

    return (
        <div className='product-item'>
            <h2>{name}</h2>
            <h3>${priceUpdated.toFixed(2)}</h3>
            <p>{details}</p>
            <p>Stock: {available ? "Available" : "Unavailable"}</p>
            <button onClick={() => setAvailable(!available)}>Change stock</button>
        </div>
    )
}

export default ProductItem