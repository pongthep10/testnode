const knex = require('knex')({
    client: 'pg',
    connection: {
      host: 'nsq-db-cluster-instance-1.cfeublxda7lo.ap-southeast-1.rds.amazonaws.com',
      user: 'chatpify_uat',
      password: 'jfS2wdYY6Am91X2K',
      database: 'chatpify_uat'
    }
  })
  const bookshelf = require('bookshelf')(knex)
  
  module.exports = bookshelf