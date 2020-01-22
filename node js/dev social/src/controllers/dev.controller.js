const axios = require('axios');
const Dev = require('../models/dev');

const index = async (req, res) => {
  const devs = await Dev.find();
  return res.json(devs);
};

const update = async (req, res) => {
  const dev = await Dev.findByIdAndUpdate( req.params.id, req.body);
  return res.json(req.body);
};

const remove = async (req, res) => {
  const dev = await Dev.findByIdAndRemove(req.params.id);
  return res.json(dev);
};

const store = async (req, res) => {
  const { github_username, techs, latitude, longitude } = req.body;
  
  let dev = await Dev.findOne({ github_username });
  
  if (!dev) {

    const apiResponse = await axios.get(`https://api.github.com/users/${github_username}`);
    
    const { name = login , avatar_url, bio } = apiResponse.data;
    
    const location = {
      type: 'Point',
      coordinates: [longitude, latitude]
    }
  
    dev = await Dev.create({
      github_username,
      bio,
      avatar_url,
      techs,
      name,
      location
    }); 

  }

  res.send(dev);
};

module.exports = { store, index, update, remove };