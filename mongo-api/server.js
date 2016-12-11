import express from 'express';
import mongoStartUp from './mongo-startup';
import bluebird from 'bluebird';
import MongoDB from 'mongodb';
bluebird.promisifyAll(MongoDB);

const { MongoClient } = MongoDB; 
const port = 1984;

let app = new express();

app.get('/basket', (req, res) => {

  MongoClient.connectAsync("mongodb://localhost:27017/superstore")
  .then(database => {
    let collection = database.collection('basket');
    const output = collection.findOne({id:1234}, function(err, basket) {
      return res.json(basket);
    });
  })
  .catch(err => res.send('error: ' + err));
})

app.listen(port, function(error) {
  if (error) {
    console.error(error)
  } else {
    mongoStartUp;
    console.info("API running ==> 🌎  Listening on port %s. Open up http://localhost:%s/ in your browser.", port, port)
  }
})


export default app;
