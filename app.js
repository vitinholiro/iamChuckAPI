//
// - Properties

require('./api/config/config')
//require('./api/config/database')

const express = require('express')
const app = express()
const port = process.env.PORT
const bodyParser = require('body-parser')
const helmet = require('helmet')

// - Routes

const { ChuckRoutes } = require('./api/chuck/routes/chuck-routes')
const HomeRoutes = require('./api/routes/home-routes')

// - Middlewares

app.use(bodyParser.json())
app.use(helmet())

// - Routes

app.use('/chuck-api', ChuckRoutes);
app.use('/bff-api', HomeRoutes);
app.get('/', (req, res) => res.send('Hello World!'))

// - Server

app.listen(port, () => console.log(`IamChuckAPI listening on port ${port}`))