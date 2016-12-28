import React from 'react';
import { Link } from 'react-router';
import ProductList from '../../product-list';

const products = [
  {
    id: '001',
    name: 'Product 1',
    price: 1.99
  },
  {
    id: '002',
    name: 'Product 2',
    price: 2.50
  }
];

const BasketPage = () => {
  return (
    <div>
      <h1>{'Basket Page'}</h1>
      <p>{'My basket page'}</p>
      <Link to='/'>{'Basket'}</Link>
      <Link to='/order-summary'>{'Summary'}</Link>
      <ProductList products={products} />
    </div>
  );
}

export default BasketPage;
