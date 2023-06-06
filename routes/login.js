const express = require('express');
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;

const router = express.Router();

// Configure the LocalStrategy
passport.use(
  new LocalStrategy(
    {
      usernameField: 'username', // assuming the form field name for username is 'username'
      passwordField: 'password', // assuming the form field name for password is 'password'
    },
    (username, password, done) => {
      // Replace this with your actual authentication logic
      if (username === '12190013.gcit@rub.edu.bt' && password === 'Monallay123.') {
        return done(null, { username: username, password: password }); // Provide the user object
      } else {
        return done(null, false); // Authentication failed
      }
    }
  )
);

router.use(passport.initialize());
router.use(passport.session());

// Handle login
router.post('/', (req, res, next) => {
  passport.authenticate('local', (err, user, info) => {
    console.log('Inside passport.authenticate function');
    if (err) {
      console.log('Error:', err);
      return next(err);
    }
    if (!user) {
      console.log('Invalid credentials');
      req.flash("login", "Username or Password is incorrect. Try again");
      res.redirect("/")
    }
    if (user.username === '12190013.gcit@rub.edu.bt' && user.password === 'Monallay123.') {
      req.session.user = user; // store user object in session
      console.log(req.isAuthenticated()); // logs true if the user is authenticated
      console.log(user.username); // logs the current authenticated user
      return res.redirect('/api/v1/employlist');
    } else {
      console.log('Invalid user role or status');
      req.flash("login", "Username or Password is incorrect. Try again");
      res.redirect("/")
    }
  })(req, res, next);
});

// Handle logout
router.get('/logout', function(req, res) {
  req.logout(function(err) {
    if (err) {
      console.error(err);
    }
    res.redirect('/'); // redirect to the root URL or any other desired URL
  });
});


module.exports = router;
