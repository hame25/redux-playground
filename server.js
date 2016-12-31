import express from 'express';
import { join as joinPath } from 'path';
import { compileFile } from 'pug';
import { match, RouterContext} from 'react-router';
import React from 'react';
import ReactDOMServer from'react-dom/server';
import createRoutes from './routes';
//import fetchData from './utils/fetch-data';
import createMemoryHistory from 'history/createMemoryHistory';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux'
import App from './components/app';
import progressReducer from './reducers';
import thunkMiddleware from 'redux-thunk';

const port = 1982;

let app = new express();

app.use(express.static(joinPath(__dirname, 'public')))

let layoutPath = joinPath(__dirname, './layout/layout.jade');
let layout = compileFile(layoutPath);

app.get("/", function(req, res) {
  res.sendFile(__dirname + '/index.html')
});

app.all("*", (req, res) => {

  const history = createMemoryHistory(req.url);
  const routes = createRoutes(history);

  match({ routes, location: req.originalUrl }, (err, redirectLocation, renderProps) => {

    const components = renderProps.components;
    const Component = components[components.length - 1].WrappedComponent;
    console.log('component', Component);

    const store = createStore(
      progressReducer,
      applyMiddleware(thunkMiddleware)
    )

    Component.fetchData({store}).then((data) => {

      function createElement(Component, props) {
        return <Component {...props} {...data} />
      }

      const html = ReactDOMServer.renderToString(
        <Provider store={store}>
          <App>
            <RouterContext {...renderProps} data={data} createElement={createElement}/>
          </App>
        </Provider>
      );

      const templateLocals = {
        content: html,
        data: data
      }

      res.send(layout(templateLocals));
    });
  });
});



app.use('/src', express.static(__dirname + '/public'));

app.listen(port, function(error) {
  if (error) {
    console.error(error)
  } else {
    console.info("==> 🌎  Listening on port %s. Open up http://localhost:%s/ in your browser.", port, port)
  }
})

export default app;
