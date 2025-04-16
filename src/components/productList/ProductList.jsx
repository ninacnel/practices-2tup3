import React from 'react'
import ProductItem from '../productItem/ProductItem';
import { Col, Container, Row } from 'react-bootstrap';


const ProductList = ({ products, dollar }) => {
  return (
    <Container>
      <Row>
        {products.map((product) => (
          <Col key={product.id} xl={4} md={6} xs={12}>
            <ProductItem
              id={product.id}
              dollar={dollar}
              name={product.name}
              price={product.price}
              details={product.details}
            />
          </Col>
        ))}
      </Row>
    </Container>
  )
}

export default ProductList