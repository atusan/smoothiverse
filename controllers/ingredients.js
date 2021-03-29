const Ingredient = require('../models/ingredient');
const Smoothie = require('../models/smoothie');

module.exports = {
  new: newIngredient,
    create,
    addToItems
  };

  function newIngredient(req, res) {
    Ingredient.find({}, function (err, ingredients) {
      res.render('ingredients/new', {
        title: 'Add Ingredient',
        ingredients
      });
    });
  }
     
  function create(req, res) {
    console.log('hitting ing create')
    Ingredient.create(req.body, function (err, ingredient) {
      console.log(req.body,'ingredient req.body')
      res.redirect('/smoothies/new');
    });
  }

  function addToItems(req, res){
    console.log('hitting addToItem')
    // find the smoothie,
    Smoothie.findById(req.params.smoothieId, function(err, smoothie){
     
        smoothie.items.push(req.body.id);
   
        smoothie.save(function(err){
        // res.redirect('/smoothies/new')
        res.redirect('/smoothies')
      })
    })
   
   }

   