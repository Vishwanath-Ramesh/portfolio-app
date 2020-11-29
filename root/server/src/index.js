const express = require('express')
const cors = require('cors')
const path = require('path')

const { mongoClient } = require('./service/database')
const DownloadsRoute = require('./routes/Downloads')

const app = express()
const port = process.env.PORT || 8080

app.use(express.json())
app.use(cors({ origin: true }))

app.get('/api/data', async (req, res) => {
  const portfolioData = await mongoClient
    .db('portfolio')
    .collection('data')
    .findOne()

  res.status(200).send(portfolioData)
})

app.use('/api', DownloadsRoute)
app.use('/', express.static(path.join(__dirname, '../../client/dist')))
app.use('/*', (req, res) => res.status(404).json({ error: 'Page not found' }))

app.listen(
  port
  // , () => console.log(`Server running at ${port}`)
)
