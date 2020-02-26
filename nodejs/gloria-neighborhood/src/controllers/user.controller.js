const User = require('../models/user.model');

const create = (req, res) => User.create(req.body)
    .then(user => res.status(201).send(user))
    .catch(err => res.json(err.message));

const update = (req, res) => User.findByIdAndUpdate(req.params.id, req.body, { new: true })
    .then(result => res.json(result))
    .catch(err => res.json(err.message))

const remove = (req, res) => User.findByIdAndRemove(req.params.id)
    .then(result => res.json(result))
    .catch(err => res.json(err.message))

const read = (req, res) => User.findById(req.params.id)
    .then(result => res.json(result))
    .catch(err => res.json(err.message))

const search = (req, res) => User.find({ $text: { $search: req.query.q }})
    .skip(parseInt(req.query.skip) || 0)
    .limit(parseInt(req.query.limit) || 10)
    .then(result => res.json(result))
    .catch(err => res.json(err))

const myUser = (req, res) => res.send(req.user)

module.exports = { create, update, remove, read, search , myUser };