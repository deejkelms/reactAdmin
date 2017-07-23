'use strict'

const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const {resolve} = require('path')

module.exports = app
  .use(bodyParser.urlencoded({ extended: true }))
  .use(bodyParser.json())
// this is all front end stuff
  .use(express.static(resolve(__dirname, '..', 'public')))

  .get('/*', (req, res, next) => {
    res.sendFile(resolve(__dirname, '..', 'public', 'index.html'))
  })

  .use((err, req, res, next) => {
    console.log(err)
    res.status(500).send(err)
    next()
  })

if (require.main === module) {
  app.listen(1337, () => {
    console.log('Listening on port 1337')
  })
}
