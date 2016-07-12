/* globals describe it */
require('../app')
const expect = require('chai').expect
const supertest = require('supertest')
const api = supertest(`http://localhost:${process.env.PORT}`)

describe('GET /projects', function () {
  // These test access the API & DB, so are slow. More extensive tests would use mocking
  this.timeout(10000)

  it('should return a 200 response', (done) => {
    api.get('/projects')
      .set('Accept', 'application/json')
      .expect(200, done)
  })
  it('should return an object that has a field called "name"', (done) => {
    api.get('/projects')
      .set('Accept', 'application/json')
      .end((error, response) => {
        expect(error).to.be.a('null')
        expect(response.body).to.be.instanceof(Array)
        done()
      })
  })
})
