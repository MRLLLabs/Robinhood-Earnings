const cassandra = require('cassandra-driver');
const client = new cassandra.Client({ contactPoints: ['localhost'], localDataCenter: 'datacenter1', keyspace: 'test' , credentials: {username: 'cassandra', password: 'cassandra'}});
 
client.connect(function (err) {
    if(err) {
        console.log('err', err);
    } else {
        console.log('connected');
    }
  });