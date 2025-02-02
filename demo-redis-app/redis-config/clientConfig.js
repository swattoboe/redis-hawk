/*
Initializes and configures the node-redis client.

Imported by /utils/mock-commands.js

TO-DOS:
we need set standard configurations on the redis database:
  -set "maxmemory" - how much memory this database is allowed to use
  -set eviction policies if maxmemory is reached
  etc.

*/

const redis = require('redis');
const { promisify } = require('util');
const RedisServer = require('redis-server');
const clients = [];

const createClients = async () => {

  for (let PORT = 6379; PORT < 6381; PORT++) {

    const server = new RedisServer(PORT);

    try {
      await server.open()
    } catch (e) {
      console.log(`Could not start a new server on port ${PORT} - a server may already be running on this port`);
    }

    const client = redis.createClient({host: '127.0.0.1', port: PORT});
    client.config('SET', 'notify-keyspace-events', 'KEA');
    client.select = promisify(client.select).bind(client);
    client.on('error', (error) => {
      console.log(`Redis client error occured (port ${PORT}): ${error}
      Please ensure you have a redis server running on this port.
      bash: redis-server --port ${PORT}`);
    });
  
    clients.push(client);
  }

  return clients

}

module.exports = createClients;