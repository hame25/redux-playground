import express from 'express';
import redisClient from './redis-client';
import {unflatten} from 'flat'

const port = 1983;

let app = new express();

app.get('/basket', (req, res) => {

  redisClient.hgetallAsync('basket')
    .then(basket => res.json(unflatten(basket)));
})

app.listen(port, function(error) {
  if (error) {
    console.error(error)
  } else {
    console.info("API running ==> 🌎  Listening on port %s. Open up http://localhost:%s/ in your browser.", port, port)
  }
})


export default redisClient;
