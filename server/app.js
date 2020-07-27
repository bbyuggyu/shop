const express = require('express');
const app = express();

app.use('/', require('./routes'));
module.exports = app;

const mongoose = require('mongoose')
const cfg = require('./config/mongo')

mongoose.connect(cfg.dbUrl, { useNewUrlParser: true, useUnifiedTopology : true, },  (err) => {
  if(err) return console.error(err)
  console.log('mongoose connected!')
})
