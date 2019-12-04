const request = require('supertest');
const app = require('./../../../server/server.js');

describe('testing the test', () => {
  it('should get a response from the get method', (done) => {
    request(app).get('/getData').then((response) => {
      expect(response.statusCode).toBe(200);
      done();
    })
  })

  it('should receive data from a mongoose query', (done) => {
    request(app).get('/getData').then((response) => {
      expect(response.body.length).toBeGreaterThan(0)
      done()
    })
  })

  it('should send a 404 if no data found', (done) => {
    request(app).get('/getData').then((response) => {
      expect(response.statusCode).toBe(404);
      done();
    })
  })

})
