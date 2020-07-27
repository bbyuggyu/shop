const express = require('express');
const createError = require('http-errors');
const router = express.Router();
const UserController = require('../controller/user')

router.post('/', (req, res) => {
  UserController.addUser(req.body)
    .then(r => {
      res.send(r)
    })
});

router.get('/', (req, res) => {
  UserController.findUsers()
    .then(r => {
      res.send(r)
    })
});

router.get('/:id', (req, res) => {
  const id = req.params.id
  UserController.findUserById(id)
    .then(r => {
      res.send(r)
    })
});

router.all('*', function(req, res, next) {
  next(createError(404, 'Api Not Found'));
});

module.exports = router;
