const router = require('express').Router();
const UserController = require('../controllers/user.controller');

router.route('/users')
  .post(UserController.createuser);

module.exports = router;