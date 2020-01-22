const user = require('../models/user');

const createuser = (req, res) => { 
  user.create(req.body)
    .then(doc => res.status(201).json(doc.toJSON()))
    .catch(err => res.status(400).json({ status: 400, message: err.message }));
};

module.exports = { createuser };