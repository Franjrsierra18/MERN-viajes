const express = require('express');
const router = express.Router();
const bcrypt =  require('bcryptjs');
const passport = require('passport');

const User = require('../models/User')

router.get('/login', (req,res) => {
  res.send('login');
})

router.get('/register', (req,res) => {
  res.send('register');
})

router.post('/register', (req,res) => {
  const { name, email, password, repitPassword } = req.body;
  let errors = [];

  //check required fields
  if (!name || !email || !password || !repitPassword) {
    errors.push({ msg: 'Porfavor rellene todos los campos' });
  }

  //check passwords match
  if (password !== repitPassword) {
    errors.push({ msg: 'No coinciden las contraseñas' });
  }
  if (password.length < 6) {
    error.push({ msg: 'Contraseña debe tener al menos 6 caracteres' });
  }

  if (errors.length > 0) {
    res.render('register', {
      errors,
      name,
      password,
      repitPassword
     });
  } else {
    User.findOne({ email: email })
      .then(user => {
        if (user) {
          errors.push({ msg : 'email esta registrado'})
          res.render('register', {
            errors,
            name,
            password,
            repitPassword
           });
        } else {
          const newUser = new User({
            name,
            email,
            password
          });

          bcrypt.genSalt(10, (err, salt) => {
            bcrypt.hash(newUser.password, salt, (err, hash) => {
              if(err) throw err;
              newUser.password = hash;
              newUser.save()
                .then(user => {
                  req.flash('success_msg', 'Estas Registrado, ya puedes hacer Login');
                  res.redirect('/users/login');
                })
                .catch(err => console.log(err));
          })})
        }
      })
  }

})

router.post('/login', (req,res,next) => {
  passport.authenticate('local', {
    successRedirect: '/home',
    failureRedirect: '/users/login',
    failureFlash: true
  })(req,res,next);
})

module.exports = router;