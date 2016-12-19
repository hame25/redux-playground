import React from 'react';
import { browserHistory } from 'react-router';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { render } from 'react-dom';
import App from './components/app';
import progressReducer from './reducers';
import createRoutes from './routes';

const routes = createRoutes(browserHistory);
const store = createStore(progressReducer);

render (
  <Provider store={store}>
    <App>
      { routes }
    </App>
  </Provider>,
  document.getElementById('content')
);


