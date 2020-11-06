const express = require('express')
const app = express()
const cors = require('cors')

const database = require('./models/repository')
database.connect()


const filmes = require('./routes/filmesRoute')

app.use(cors())
app.use(express.json())
app.use('/', filmes)

module.exports = app