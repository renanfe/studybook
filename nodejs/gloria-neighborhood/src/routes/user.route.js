const { Router } = require('express')
const passport = require('passport')
const UserController = require('../controllers/user.controller')
const routes = Router();

routes.route('/users')
    .get(UserController.search)
    .post(UserController.create)
routes.route('/users/:id')
    .get(UserController.read)
    .put(UserController.update)
    .delete(UserController.remove)
    
routes.route('/me')
    .get(passport.authenticate('basic', { session: false }), UserController.myUser)

module.exports = routes;