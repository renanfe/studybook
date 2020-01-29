const request = require('supertest');
const app = require('./index');

describe('Integration Test - Main App', () => {

  it('POST /devs', (done)=> {
    request(app)
      .post('/devs')
      .set('Content-Type', 'application/json')
      .send({
        'github_username': 'renanfe',
        'techs': ['nodejs', 'reactjs'],
        'latitude': -23.5989837,
        'longitude': -46.8428755
      })
      .expect(200, done);
  });

  it('GET /devs', (done)=> {
    request(app)
      .get('/devs')
      .set('Content-Type', 'application/json')
      .expect('Content-Type', /json/)
      .expect(200)
      .expect(res => !res.body && new Error("missing body"))
      .end(done);
  });

  it('GET /search', (done)=> {
    request(app)
      .get(`/search?latitude=-23.5989837&longitude=-46.8428755&techs=reactjs,nodejs`)
      .set('Content-Type', 'application/json')
      .expect('Content-Type', /json/)
      .expect(200)
      .expect(res => res.body.length === 0 && new Error("Has data"))
      .end(done);
  });


});