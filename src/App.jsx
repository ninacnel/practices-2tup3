import { BrowserRouter, Route, Routes } from 'react-router';
import './App.css'
import Dashboard from './components/dashboard/Dashboard';
import NotFound from './components/notFound/NotFound';
import Login from './components/login/Login';
import { useState } from 'react';
import Protected from './components/protected/Protected';
import ProductDetail from './components/productDetail/ProductDetail';

function App() {
  const [isSignedIn, setIsSignedIn] = useState(false);

  const handleSignIn = () => {
    setIsSignedIn(true);
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Protected isSignedIn={isSignedIn} />}>
          <Route path="/" element={<Dashboard />} />
        </Route>

        <Route path='/product/:id' element={<ProductDetail />} />
        <Route path='/login' element={<Login onLogin={handleSignIn} />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
