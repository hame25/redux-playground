import React from'react';
import {render} from 'react-dom';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import App from './components/app';
import toDoApp from './reducers';


console.log('todo list');
let store = createStore(toDoApp);

render (
  <Provider store={store}>
    <App/>
  </Provider>,
  document.getElementById('root')
);
