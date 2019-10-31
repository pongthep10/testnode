const bookshelf = require('../db/bookshelf')
const User = bookshelf.Model.extend({
  tableName: 'users'
})

module.exports = bookshelf.model('User', User)