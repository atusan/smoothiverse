const User = require('../models/user');

module.exports = {
  index
  
};

function index(req, res, next) {
    console.log(req.query)
    // Make the query object to use with Student.find based up
    // the user has submitted the search form or now
    
      res.render('users/index', {
        users,
        user: req.user,
        name: req.query.name,
        
      });
  }