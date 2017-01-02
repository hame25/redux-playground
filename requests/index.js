import fetch from 'isomorphic-fetch';

export const fetchBasket = () => {
  return fetch('http://localhost:1984/basket').then(res => res.json());
}
