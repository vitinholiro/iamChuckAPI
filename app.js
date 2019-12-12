//
// - Properties

require('./api/config/config')
const express = require('express')
const app = express()
const port = process.env.PORT
const bodyParser = require('body-parser')
const helmet = require('helmet')

// - Routes

const { ChuckRoutes } = require('./api/chuck/routes/chuck-routes')
const { BFFRoutes } = require('./api/bff/routes/bff-routes')

// - Middlewares

app.use(bodyParser.json())
app.use(helmet())

// - Routes

app.use('/chuck-api', ChuckRoutes);
app.use('/bff-api', BFFRoutes);
app.get('/', (req, res) => res.send('Hello World!'))

// - Server

app.listen(port, () => console.log(`IamChuckAPI listening on port ${port}`))