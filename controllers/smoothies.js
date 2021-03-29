const Smoothie = require('../models/smoothie');
const Ingredient = require('../models/ingredient')

module.exports = {
    index,
    new:newRecipe,
    show,
    create,
    edit,
    update
    
  };

  function index(req,res){
    console.log('hitting smoothie index')
      Smoothie.find({})
      .populate('userId')
      .exec(function (err, smoothies){
        res.render(`smoothies/index`, { title: 'View All' , smoothies});
      })   
  }


  function show(req, res) {
    Smoothie.findById(req.params.id)
    // .populate('userId')
    .populate('items')
    .exec(function (err, smoothie) {
      res.render('smoothies/show', { title: 'Recipe Details', smoothie });
    });
  }
  
  function newRecipe(req, res) {
    
    console.log('hitting smoothie newRecipe')
        Ingredient.find({},function(err,ingredients){
          console.log(ingredients)
          res.render('smoothies/new', { title: 'Add Recipe',ingredients});
         });  
      }

  function create(req, res) {
    console.log('hitting smoothie creat')
    console.log(req.body,'this req.body')
    console.log(req.user,'req.user')
    const smoothie = new Smoothie(req.body);
    console.log(req.body,'this create req.body')
    smoothie.userId = req.user._id;
    // smoothie.items.push(req.body.items)
    smoothie.save(function(err){
        if (err) return res.redirect('/smoothies/new');
        console.log(smoothie)
        res.redirect('/smoothies')
    })
  }

  function edit(req, res) {
    
    Smoothie.findById(req.params.id)
    .populate('items')
    .exec(function (err, smoothie) {
      Ingredient.find({}, function (err, ingredients) {
        res.render('smoothies/edit', {title: 'Edit', smoothie, ingredients});
      });
      
    });
  }

  function update(req, res) {
    console.log('hitting update')
   
    Smoothie.findByIdAndUpdate(req.params.id, req.body , {new: true},function (err, smoothie) {
      // smoothie.items.push(req.body.items._id);
      console.log(req.body._id,'itm id?') 
      // console.log(err)
      console.log(smoothie.items, 'newitem')
      console.log(req.params.id ,'req.params.id')
      console.log(smoothie ,'update smoothie')
      console.log(req.body ,'req.body smoothie')
        res.redirect(`/smoothies/${req.params.id}`)
    })
}



  

  
