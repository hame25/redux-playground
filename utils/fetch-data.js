import { all as all } from 'when/keys';

const fetchData = (routerState) => {

  let { params, query } = routerState;
      console.log('routestate', routerState);

  return all(routerState.routes.filter((route) => {

    return route.handler.fetchData;

  }).reduce((promises, route) => {

      promises[route.name] = route.handler.fetchData(params);
      return promises;

  }, {}));
};

export default fetchData;
