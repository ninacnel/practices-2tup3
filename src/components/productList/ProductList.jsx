import React from 'react'
import ProductItem from '../productItem/ProductItem';

const products = [
    {
      name: "Juego de Tazas de Café",
      price: 12.99,
      details: "Set de 4 tazas de cerámica, ideal para café o té, con diseño moderno y elegante."
    },
    {
      name: "Lámpara de Mesa LED",
      price: 24.50,
      details: "Lámpara de escritorio con luz LED regulable, diseño minimalista, ideal para oficinas y hogares."
    },
    {
      name: "Cesta de Mimbre",
      price: 19.99,
      details: "Cesta de mimbre con acabado natural, perfecta para organizar ropa, juguetes o artículos diversos."
    },
    {
      name: "Almohada",
      price: 15.80,
      details: "Almohada de espuma viscoelástica que se adapta a la forma de tu cuello y cabeza, proporcionando descanso."
    },
    {
      name: "Espejo de Pared Circular",
      price: 29.99,
      details: "Espejo grande de pared con marco metálico dorado, ideal para decorar tu sala o habitación."
    },
    {
      name: "Juego de Sartenes Antiadherentes",
      price: 49.99,
      details: "Juego de 3 sartenes con recubrimiento antiadherente, fácil de limpiar, ideal para cocina diaria."
    },
  ];
  

const ProductList = ({dollar}) => {
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