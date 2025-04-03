import { useState } from 'react';
import './App.css'
import BeerStyles from './components/beerStyles/BeerStyles';
import Footer from './components/footer/Footer'
import ProductList from './components/productList/ProductList'
import ChangeDollar from './components/changeDollar/ChangeDollar';
import { allProducts } from './components/data';
import ProductForm from './components/productForm/ProductForm';



function App() {
  const [products, setProducts] = useState(allProducts);
  const [dollar, setDollar] = useState(1200);

  const handleAddProduct = (newProduct) =>{
      setProducts([...products, newProduct]);
  }

  return (
    <>
      <h1>Bazar</h1>
      <div className='product-list'>
        <ProductList products={products} dollar={dollar}/>
        <ProductForm onAddNewProduct={handleAddProduct}/>
        {/* <ChangeDollar onSetNewDollar={setDollar}/>
        <br />
        <BeerStyles beers={beers} /> */}
      </div>
      <Footer />
    </>
  )
}

export default App
