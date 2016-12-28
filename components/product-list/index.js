import React from 'react';
import ProductTitle from '../product-tile';

function renderProductTile(product) {
  return <ProductTitle product={product} key={product.id}/>;
}

const ProductList = ({products}) => {
  return (
    <div className='product-list'>
      <ul>
        { products.map((item) => renderProductTile(item)) }
      </ul>
    </div>
  );
}

export default ProductList;
