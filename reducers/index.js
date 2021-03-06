const progress = (state = {active: 1}, action) => {
  switch(action.type) {
    case 'PROGRESS_CLICK':
      return Object.assign({}, state, {
        active: action.id
      });
    case 'UPDATE_TITLE':
      return Object.assign({}, state, {
        title: action.title
      })
    case 'RECIEVE_BASKET':
      return Object.assign({}, state, recieveBasket(action.products));
    default:
      return state;
  }
}

const recieveBasket = (products) => {
  return {
    products: products
  }
}

export default progress;
