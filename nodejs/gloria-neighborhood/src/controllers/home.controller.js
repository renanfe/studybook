const Home = require('../models/home.model')

const create = (req, res) => Home.create(req.body)
    .then(result => res.status(201).json(result))
    .catch(err => res.json(err.message));

const update = (req, res) => Home.findByIdAndUpdate(req.params.id, req.body, { new: true })
    .then(result => res.json(result))
    .catch(err => res.json(err))

const remove = (req, res) => Home.findByIdAndDelete(req.params.id)
    .then(result => res.json(result))
    .catch(err => res.json(err))

const read = (req, res) => Home.findById(req.params.id)
    .then(result => res.json(result))
    .catch(err => res.json(err))

const search = (req, res) => Home.find({ $text: { $search: req.query.q } })
    .skip(req.params.skip && 0)
    .limit(req.params.limit && 10)
    .then(result => res.status(200).json(result))
    .catch(err => res.json(err))

module.exports = { create, update, remove, read, search }