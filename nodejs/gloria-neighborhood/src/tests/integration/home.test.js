const request = require('supertest')
const { app, mongoose } = require('../../index')
const Home = require('../../models/home.model')

let home = {}

const home1 = {
    number: "100",
    street: "avenida paulista",
    city: "são paulo",
    state: "são paulo",
    country: "br",
    zipcode: "111111",
    residents: ["5e45a496f81ad4338434d950"]
}

describe('Home Controller Unit Test', () => {

    beforeAll(async () => {
        await Home.deleteMany()
    })

    afterAll(async () => {
        await Home.deleteMany()
        await mongoose.connection.close()
    })

    it('should create a home ', async () => {
        let res = await request(app)
            .post('/api/homes')
            .send(home1)
        home = res.body
        expect(res.status).toBe(201)
        expect(res.body).not.toBeNull()
        expect(res.body).toMatchObject(home1)
    })

    it('should get a home successfully', async () => {
        let res = await request(app)
            .get(`/api/homes/${home._id}`)
        expect(res.status).toBe(200)
        expect(res.body).not.toBeNull()
        expect(res.body).toMatchObject(home1)
    })

    it('should update a home successfully', async () => {
        let res = await request(app)
            .put(`/api/homes/${home._id}`)
            .send({ zipcode: '000' })
        expect(res.status).toBe(200)
        expect(res.body).not.toBeNull()
        expect(res.body.zipcode).toBe('000')
    })

    it('should search a home', async () => {
        const res = await request(app)
            .get(`/api/homes?q=paulo`)
        expect(res.status).toBe(200)
        expect(res.body[0]).not.toBeNull()
    });

    it('should remove a home', async () => {
        const res = await request(app)
            .delete(`/api/homes/${home._id}`)
        expect(res.status).toBe(200)
        expect(res.body).not.toBeNull()
    });

});