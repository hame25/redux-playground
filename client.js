import React from 'react';
import { browserHistory } from 'react-router';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { render } from 'react-dom';
import thunkMiddleware from 'redux-thunk';
import App from './components/app';
import progressReducer from './reducers';
import createRoutes from './routes';

const initialState = JSON.parse(document.documentElement.dataset.props);
const routes = createRoutes(browserHistory);
const store = createStore(progressReducer, initialState, applyMiddleware(thunkMiddleware));


render (
  <Provider store={store}>
    <App>
      { routes }
    </App>
  </Provider>,
  document.getElementById('content')
);


