export const updateProgress = (id) => {
  return {
    type: "PROGRESS_CLICK",
    id: id
  }
}

export const RECIEVE_BASKET = 'RECIEVE_BASKET';

export const fetchBasket = () => {
  
  return (dispatch, getState) => {

    const products = {
      products:[
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
      ]
    };

    return Promise.resolve(products).then(res => {
      dispatch({ type: RECIEVE_BASKET, products: res.products })
      return res;
    });
  }
}

