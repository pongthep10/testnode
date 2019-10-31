const knex = require('knex')({
    client: 'pg',
    connection: {
      host: '127.0.0.1',
      user: 'pongtheptiyawatwittaya',
      database: 'pg'
    }
  })
  const bookshelf = require('bookshelf')(knex)
  
  module.exports = bookshelf