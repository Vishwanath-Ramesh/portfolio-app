const { mongoClient } = require('../service/database')

class DownloadsController {
  static async postDownload(req, res) {
    const activityData = await mongoClient
      .db('portfolio')
      .collection('activity')
      .insertOne({ dateDownloaded: new Date() })

    res.status(201).json({ id: activityData.insertedId, status: 'success' })
  }

  static async getDownloadCount(req, res) {
    const activityData = await mongoClient
      .db('portfolio')
      .collection('activity')
      .find()
      .count()

    res.json({ noOfDownloads: activityData })
  }
}

module.exports = DownloadsController
