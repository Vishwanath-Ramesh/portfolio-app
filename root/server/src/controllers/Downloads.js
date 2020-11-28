const { mongoClient } = require('../service/database')

class DownloadsController {
  static async postDownload(req, res) {
    const activityData = await mongoClient
      .db('portfolio')
      .collection('activity')
      .insertOne({ dateAdded: new Date() })

    res.json(activityData)
  }

  static async getDownloadCount(req, res) {
    const activityData = await mongoClient
      .db('portfolio')
      .collection('activity')
      .find()
      .count()

    res.json(activityData)
  }
}

module.exports = DownloadsController
