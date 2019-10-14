const express = require('express');
const router = express.Router();

router.get('/', (req,res) => res.render('home'))

router.get('/home', (req,res) => res.render('home'))

router.get('/users/register', (req,res) => res.render('register'))

router.get('/users/login', (req,res) => res.render('login'))

module.exports = router;