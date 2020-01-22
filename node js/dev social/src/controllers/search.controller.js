const Dev = require('../models/dev');

const index = async (req, res) => {
  let { latitude, longitude, techs } = req.query;
  techs = techs.split(',').map(tech => tech.trim());
  const devs = await Dev.find({
    techs: {
      $in: techs
    },
    location: {
      $near: {
        $geometry: {
          type: 'Point',
          coordinates: [longitude, latitude]
        },
        $maxDistance: 10000
      }
    }
  });
  return res.json(devs);
};

module.exports = { index };