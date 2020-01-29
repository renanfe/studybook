const { Router } = require('express');
const routes = Router();
const DevController = require('./controllers/dev.controller');
const SearchController = require('./controllers/search.controller');

routes.get('/devs', DevController.index);
routes.post('/devs', DevController.store);
routes.put('/devs/:id', DevController.update);
routes.delete('/devs/:id', DevController.remove);
routes.get('/search', SearchController.index)

module.exports = routes;