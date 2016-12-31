import bluebird from 'bluebird';
import MongoDB from 'mongodb';

bluebird.promisifyAll(MongoDB);
const { MongoClient } = MongoDB; 

const basket = {
  id: 1234,
  totalPrice: 22.99,
  items: [
    {
      id: "001",
      name: "Beans",
      price: 0.89
    },
    {
      id: "002",
      name: "Bread",
      price: 1.23
    }
  ],
  delivery: {
    time: '1pm',
    cost: 5.55
  }
}

const mongoStartUp = MongoClient.connectAsync("mongodb://localhost:27017/superstore")
  .then(database => {
    //tear it down
    database.collection('basket').drop();

    //build it up
    const collection = database.collection('basket');
    collection.insert(basket)

    console.log('Initial db created');
  })
  .catch(err => console.log('error: ' + err));

export default mongoStartUp;
