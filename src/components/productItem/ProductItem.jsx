import React, { useState } from 'react'
import { Button } from 'react-bootstrap';
import { useNavigate } from 'react-router';

const ProductItem = ({ id, name, price, details, dollar }) => {
    const [available, setAvailable] = useState(true);

    
    const navigate = useNavigate();

    const priceUpdated = price * dollar;

    const handleNavigateDetails = () => {
        navigate(`/product/${id}`, {
            state: { name, details, price }
        });
    }

    return (
        <div className='product-item'>
            <h2>{name}</h2>
            <h3>${priceUpdated.toFixed(2)}</h3>
            <p>{details}</p>
            <p>Stock: {available ? "Available" : "Unavailable"}</p>
            <button onClick={() => setAvailable(!available)}>Change stock</button>
            <Button onClick={handleNavigateDetails}>See Info</Button>
        </div>
    )
}

export default ProductItem