import React from 'react';
import {Link} from 'react-router';

const BasketPage = () => {

  return (
    <div>
      <h1>{'Basket Page'}</h1>
      <p>{'My basket page'}</p>
      <Link to='/'>{'Basket'}</Link>
      <Link to='/summary'>{'Summary'}</Link>
    </div>
  );
}

export default BasketPage;
