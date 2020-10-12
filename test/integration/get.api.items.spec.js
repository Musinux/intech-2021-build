const request = require('supertest')
const { expect } = require('chai')
const app = require('../../app.js')

function connectToExpress () {
  const agent = request.agent(app)
  return agent
}

describe('GET /api/items', () => {

  beforeEach(() => {
    // pré-requête pour initialiser l'environnement
  })

  it('should return all items in database', async () => {
    const agent = connectToExpress()

    return agent.get('/api/items')
      .expect(200)
      .expect('Content-Type', /json/)
      .then((res) => {
        // console.log('res', res.body)
        expect(res.body)
          .to.be.an('array')
          .of.length(2)

        expect(res.body[0]).to.have.property('id')
        expect(res.body[0]).to.have.property('description')
        expect(res.body[0].id).to.equal(1)
        expect(res.body[1].id).to.equal(2)
      })
  })
})