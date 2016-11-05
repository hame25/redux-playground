import redis from 'redis';
import bluebird from 'bluebird';
import flatten from 'flat';

//promisify node_redis
bluebird.promisifyAll(redis.RedisClient.prototype);
bluebird.promisifyAll(redis.Multi.prototype);

const redisClient = redis.createClient({host : 'localhost', port : 6379});

redisClient.on('ready',function() {
 console.log("Redis is ready");
});

redisClient.on('error',function() {
 console.log("Error in Redis");
});

//initial dump of data
const basket = {
  id: 1234,
  totalPrice: 22.99,
  items: [
    {
      id: "001",
      name: "Beans"
    },
    {
      id: "002",
      name: "Bread"
    }
  ],
  delivery: {
    time: '1pm',
    cost: 5.55
  }
}
redisClient.hmset("basket", flatten(basket));

export default redisClient;
