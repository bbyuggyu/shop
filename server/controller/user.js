const User = require('../model/user');

function addUser(payload) {
  return User.create({ name: payload.name, pwd: payload.password, permission: payload.permission })
}

function findUsers() {
  return User.find()
    .then(u => {
      return u
    })
    .catch((e) => {
      throw e
    })
}

function findUser(userName) {
  return User.findOne({ name: userName })
    .then(u => {
      return u
    })
    .catch((e) => {
      throw e
    })
}

function findUserById(id) {
  return User.findOne({ id: id })
    .then(u => {
      return u
    })
    .catch((e) => {
      throw e
    })
}

module.exports = {
  addUser,
  findUsers,
  findUser,
  findUserById
}
