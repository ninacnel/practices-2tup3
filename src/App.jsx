import { useState } from 'react';
import './App.css'
import BeerStyles from './components/beerStyles/BeerStyles';
import Footer from './components/footer/Footer'
import ProductList from './components/productList/ProductList'
import ChangeDollar from './components/changeDollar/ChangeDollar';
import { allProducts, beers } from './components/data';
import ProductForm from './components/productForm/ProductForm';

function App() {
  const [products, setProducts] = useState(allProducts);
  const [hideDollar, setHideDollar] = useState(true);
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
        {/* <ProductForm onAddNewProduct={handleAddProduct}/>
        {hideDollar && (<ChangeDollar onSetNewDollar={setDollar}/>)}
        <br />
        <br />
        <BeerStyles beers={beers} /> */}
      </div>
      <Footer />
    </>
  )
}

export default App
