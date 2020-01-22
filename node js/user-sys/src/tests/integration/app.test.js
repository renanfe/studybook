const request = require('supertest');
const app = require('../../app');

describe('app unit test', () => {

  it('Should return a page ', async () => {
    const res = await request(app).get('/');
    expect(res.type).toEqual('text/html');
  });

});