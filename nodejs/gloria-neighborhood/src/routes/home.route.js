const express = require('express')
const HomeController = require('../controllers/home.controller')
const routes = express.Router()

routes.route('/homes')
    .get(HomeController.search)
    .post(HomeController.create)
    
routes.route('/homes/:id')
    .get(HomeController.read)
    .put(HomeController.update)
    .delete(HomeController.remove)

module.exports = routes;
