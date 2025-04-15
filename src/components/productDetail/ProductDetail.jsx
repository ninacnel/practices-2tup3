import React from 'react';
import { useLocation} from 'react-router';

const ProductDetail = () => {
  const location = useLocation();
  const { name, details, price } = location.state || {};

  return (
    <div>
      <h1>Product Detail</h1>
      <h2>{name}</h2>
      <p>{details}</p>
      <p> ${price}</p>
    </div>
  );
};

export default ProductDetail;