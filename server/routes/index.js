const express = require('express');
const createError = require('http-errors');
const router = express.Router();

router.get('/', (req, res) => {
  res.send('index page');
});

router.use('/users', require('./user'))

router.all('*', function(req, res, next) {
  next(createError(404, '그런 api 없어요.'));
});

module.exports = router;
