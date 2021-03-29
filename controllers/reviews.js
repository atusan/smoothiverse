const Smoothie = require('../models/smoothie');

module.exports ={
    create
}

function create(req, res) {
  console.log('hitting review')
  Smoothie.findById(req.params.id, function(err, smoothie) {
      console.log(req.params.id,'req.params.id review')
    smoothie.reviews.push(req.body);
    smoothie.save(function(err) {
      res.redirect(`/smoothies/${smoothie._id}`);
    });
  });
}