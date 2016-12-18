import { Router, Route} from 'react-router'
import React from "react";
import Basket from '../components/pages/basket';
import OrderSummary from '../components/pages/order-summary';

export default function(history, renderProps) {
  return (
    <Router history={history} {...renderProps} >
      <Route path="basket" component={Basket} />
      <Route path="order-summary" component={OrderSummary} />
    </Router>
  )
}
