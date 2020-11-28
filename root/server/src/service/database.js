const { MongoClient } = require('mongodb')

const { configs } = require('../configs/configs')

const mongoClient = new MongoClient(configs.databaseURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})

const connection = mongoClient.connect()

module.exports = { mongoClient, connection }
