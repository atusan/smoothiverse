var router = require('express').Router();
var usersCtrl = require('../controllers/users');
const smoothiesCtrl = require('../controllers/smoothies')
const ingredientsCtrl = require('../controllers/ingredients')
const user = require('../models/user');


// GET /students

 router.get('/smoothies', isLoggedIn, smoothiesCtrl.index);
 router.get('/smoothies/new', isLoggedIn, smoothiesCtrl.new);
 router.post('/smoothies/:id', isLoggedIn, smoothiesCtrl.show);
 router.get('/:id/edit', isLoggedIn, smoothiesCtrl.edit);
 router.put('/:id',isLoggedIn, smoothiesCtrl.update);
 
 router.get('/ingredients/new', isLoggedIn, ingredientsCtrl.new);
 router.post('/ingredients', isLoggedIn, ingredientsCtrl.create);
 router.post('/ingredients', isLoggedIn, ingredientsCtrl.addToItems);


// custom authorization middleware function
function isLoggedIn(req, res, next){
    if(req.isAuthenticated()) return next();
    // req.isAuthenticated function is given to us by passport
    res.redirect('/auth/google')
}


module.exports = router;
