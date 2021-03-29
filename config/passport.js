const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth').OAuth2Strategy;
const User = require('../models/user');

// configuring Passport!
passport.use(new GoogleStrategy({
    clientID: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_SECRET,
    callbackURL: process.env.GOOGLE_CALLBACK
  },
  function(accessToken, refreshToken, profile, cb) {
    // a user has logged in via OAuth!
    console.log(profile, "<----- Profile")
    // Fetch the User from the database and provide them back to passport 
    User.findOne({'googleId': profile.id}, function(err, user){
      if(err) return cb(err);

      if(user){

        // cb(error, documentFromMongoose)
        return cb(null, user);
      } else {
        // if we didn't find the studnet(user) go ahead create them
        const newUser = new User({
          name: profile.displayName,
          email: profile.emails[0].value,
          googleId: profile.id
        })

        // save it 
        newUser.save(function(err){
          if(err) return cb(err);
          return cb(null, newUser)
        })
      }
    })

      // or we want to create a usre // and provide them back to passport 
  }
));

passport.serializeUser(function(user, done) {
  done(null, user.id);
});

passport.deserializeUser(function(id, done) {

  // Find your User, using your model, and then call done(err, whateverYourUserIsCalled)
  // When you call this done function passport assigns the user document to req.user, which will 
  // be availible in every Single controller function, so you always know the logged in user
  User.findById(id, function(err, user) {
    done(err, user);// this assings our student document to req.user, which we can use 
    // in our controller functions to figure who is logged in
  })

});


