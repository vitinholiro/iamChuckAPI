//
// - Properties

const express = require('express')
const app = express()
const port = 3000
const bodyParser = require('body-parser')
const helmet = require('helmet')

// - Routes

const { ChuckRoutes } = require('./Routes/ChuckAPI/Routes/ChuckAPI')

// - Middlewares

app.use(bodyParser.json())
app.use(helmet())

// - Routes

app.use('/chuck-api', ChuckRoutes);
app.get('/', (req, res) => res.send('Hello World!'))

// - Server

app.listen(port, () => console.log(`Example app listening on port port!`))