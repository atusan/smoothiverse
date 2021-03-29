const Smoothie = require('../models/smoothie');

module.exports = {
    index
};


function index(req,res){
    console.log('hitting filter index')
    console.log(req.body,'filter req.body')
    Smoothie.find({type:req.body.type})
    // .populate('userId')
    .populate('items')
      .exec(function (err, smoothies){
        console.log(smoothies)
        res.render(`smoothies/index`, { title: 'View All' , smoothies});
      })   
    
}