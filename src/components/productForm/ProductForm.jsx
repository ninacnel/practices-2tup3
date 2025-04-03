import React, { useState } from 'react'

const ProductForm = ({onAddNewProduct}) => {
    const [name, setName] = useState('');
    const [price, setPrice] = useState(0);
    const [details, setDetails] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();

        // validaciones
        if (!name){
            alert('Ingrese un nombre valido.');
            return;
        }

        let newItem = {
            name: name,
            price: price,
            details: details,
        };

        // agregar el producto
        onAddNewProduct(newItem);

        setName('');
        setPrice(0);
        setDetails('');
    }

    return (
        <form onSubmit={handleSubmit}>
            <input
                type='text'
                placeholder='Ingrese nombre'
                value={name}
                onChange={(event) => setName(event.target.value)}
            />
            <input
                type='number'
                placeholder='Ingrese precio'
                value={price}
                onChange={(event) => setPrice(event.target.value)}
            />
            <input
                type='text'
                placeholder='Ingrese detalles'
                value={details}
                onChange={(event) => setDetails(event.target.value)}
            />
            <button type='submit'>Add product</button>
        </form>
    )
}

export default ProductForm