import './App.css'
import Footer from './components/footer/Footer'
import ProductList from './components/productList/ProductList'

function App() {

  return (
    <>
      <h1>Bazar</h1>
        <div className='product-list'>
        <ProductList/>
        </div>
       <Footer/>
    </>
  )
}

export default App
