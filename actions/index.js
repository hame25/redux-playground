import { fetchBasket as fetchBasketRequest } from '../requests';

export const updateProgress = (id) => {
  return {
    type: "PROGRESS_CLICK",
    id: id
  }
}

export const RECIEVE_BASKET = 'RECIEVE_BASKET';

export const fetchBasket = () => {
  
  return (dispatch, getState) => {

    return fetchBasketRequest().then(res => {
      dispatch({ type: RECIEVE_BASKET, products: res.items })
      return {products: res.items};
    });
  }
}

export const updateTitle = (title) => {

  return (dispatch, getState) => {
    dispatch({
      type: "UPDATE_TITLE",
      title: title
    });

    return {title};
  }
};

