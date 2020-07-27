const mongoose = require('mongoose')

mongoose.set('useCreateIndex', true)
const userSchema = new mongoose.Schema({
  id: { type: String, default: '', unique: true, index: true },
  name: {type: String, default: '', unique: true },
  pwd: { type: String, default: '' },
  permission: { type: String, default: 'customer' }
})

const User = mongoose.model('User', userSchema)

module.exports = User
