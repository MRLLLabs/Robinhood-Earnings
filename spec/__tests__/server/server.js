const request = require('supertest');
const app = require('./../../../server/server.js');
const path = require('path');
const Graph = require(path.resolve(__dirname, '../../../server/db/graph.js'));

describe('testing the test', () => {
  it('should get a response from the get method', async (done) => {
    await Graph.create({symbol: "MMM"})
    request(app).get('/getData?id=1').then((response) => {
      expect(response.statusCode).toBe(200);
      done();
    })
  })

  it('should receive data from a mongoose query', async (done) => {
    await Graph.create({name: "asdfasdf"})
    request(app).get('/getData?id=1').then((response) => {
      expect(JSON.parse(response.text)).toBeDefined()
      done()
    })
  })

  it('should send a 404 if no data found', (done) => {
    request(app).get('/getData?symbol=NOCOMPANY').then((response) => {
      expect(response.statusCode).toBe(404);
      done();
    })
  })

})
