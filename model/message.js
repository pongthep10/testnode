const bookshelf = require('../db/bookshelf')
const Message = bookshelf.Model.extend({
  tableName: 'messages',
  hasTimestamps: true
})

module.exports = bookshelf.model('messages', Message)