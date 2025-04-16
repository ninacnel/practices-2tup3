import React, { useState } from 'react'
import { allProducts, beers } from '../data';
import ProductList from '../productList/ProductList';
import ChangeDollar from '../changeDollar/ChangeDollar';
import BeerStyles from '../beerStyles/BeerStyles';
import Footer from '../footer/Footer'

const Dashboard = () => {
    const [products, setProducts] = useState(allProducts);
    const [hideDollar, setHideDollar] = useState(false);
    const [dollar, setDollar] = useState(1200);
  
    const handleAddProduct = (newProduct) =>{
        setProducts([...products, newProduct]);
    }
  
    return (
      <>
        <h1>Bazar</h1>
        <button className="btn btn-danger" onClick={() => setHideDollar(!hideDollar)}>Hide Dollar</button>
        <div className='product-list'>
          <ProductList products={products} dollar={dollar}/>
           {/* <ProductForm onAddNewProduct={handleAddProduct}/> */}
          {hideDollar && (<ChangeDollar onSetNewDollar={setDollar}/>)}
          <br />
          <br />
          <BeerStyles beers={beers} />
        </div>
        <Footer />
      </>
    )
}

export default Dashboard