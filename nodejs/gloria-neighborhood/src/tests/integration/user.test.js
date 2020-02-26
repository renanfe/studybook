const { app, mongoose } = require('../../index')
const request = require('supertest')
const User = require('../../models/user.model')

var user = {}

const userCreated = {
    "username": "joão",
    "name": "João Augusto",
    "email": "joao.augusto@gmail.com",
    "password": "joao123",
}

describe('User test', () => {

    beforeAll(async () => {
        await User.deleteMany()

    })

    afterAll(async () => {
        await User.deleteMany()
        await mongoose.connection.close()
    })

    it('should create an user ', async () => {
        let res = await request(app)
            .post('/api/users')
            .send(userCreated)
        user = res.body
        expect(res.status).toBe(201)
        expect(res.body).toMatchObject(userCreated)
    });

    it('should get an user ', async () => {
        let res = await request(app)
            .get(`/api/users/${user._id}`)
        expect(res.status).toBe(200)
        expect(res.body).not.toBeNull()
    });

    it('should update an user ', async () => {
        let res = await request(app)
            .put(`/api/users/${user._id}`)
            .send({ username: 'jo' })
        expect(res.status).toBe(200)
        expect(res.body).not.toBeNull()
        expect(res.body.username).toBe('jo')
    });

    it('should search for an user ', async () => {
        let res = await request(app)
            .get('/api/users?q=augusto')
        expect(res.status).toBe(200)
        expect(res.body[0]).not.toBeNull()
    });

    it('should remove an user ', async () => {
        const res = await request(app)
            .delete(`/api/users/${user._id}`)
        expect(res.status).toBe(200)
        expect(res.body).not.toBeNull()
    });

});