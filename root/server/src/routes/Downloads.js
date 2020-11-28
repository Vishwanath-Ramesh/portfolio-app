const { Router } = require('express')

const DownloadsController = require('../controllers/Downloads')

const router = new Router()

router
  .route('/downloads')
  .get(DownloadsController.getDownloadCount)
  .post(DownloadsController.postDownload)

module.exports = router
