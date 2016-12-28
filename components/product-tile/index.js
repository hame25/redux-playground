import React from 'react';

const ProductTile = ({product}) => (
  <li>
    <h3>{product.name}</h3>
    <p>£{product.price}</p>
  </li>
);


export default ProductTile;
