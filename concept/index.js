import React from'react';
import {render} from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux'
import App from './components/app';
import progressReducer from './reducers';

console.log('concept');

let store = createStore(progressReducer);

render (
  <Provider store={store}>
    <App/>
  </Provider>,
  document.getElementById('root')
);
