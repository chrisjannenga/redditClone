var express = require('express');
var router = express.Router();
var bcrypt = require('bcrypt');
var knex = require('../db/knex.js');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.get('/login', function(req, res, next) {
  res.render('login');
});

router.get('/create', function(req, res, next) {
  console.log(knex);
  res.render('create');
});

router.post('/create', function(req, res, next) {
  console.log(knex);
  console.log(req.body)
  if (req.body.password === req.body.confirm) {
    bcrypt.hash(req.body.password, 8, function(err, hash) {
      knex.raw(`INSERT INTO users (firstname, lastname, email, age, username,  password) values ('${req.body.firstname}', '${req.body.lastname}', '${req.body.email}', '${req.body.age}', '${req.body.username}', '${hash}')`)
        .then(function() {
          res.send("SUCCESS")
        })
    });
  } else {
    res.redirect('/create');
  }
});

router.post('/login', function(req, res, next) {
  console.log(req.body)
  knex.raw(`SELECT * FROM users WHERE username = '${req.body.username}'`)
    .then(function(users) {
      bcrypt.compare(req.body.password, users.rows[0].password, function(err, resp) {
        if (resp) {
          res.send(users.rows[0])
        } else {
          res.send("FAYLUREEEE")
        }
      });
    });
});


module.exports = router;
