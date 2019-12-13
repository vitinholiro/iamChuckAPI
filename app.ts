import express = require('express');
import HomeRoutes = require('./api/routes/home-routes')

// Create a new express application instance
const app: express.Application = express();

const port = process.env.PORT
const bodyParser = require('body-parser')
const helmet = require('helmet')

// - Routes

const { ChuckRoutes } = require('./api/chuck/routes/chuck-routes')

// - Middlewares

app.use(bodyParser.json())
app.use(helmet())

// - Routes

app.use('/chuck-api', ChuckRoutes);
app.use('/bff-api', HomeRoutes);
app.get('/', (req, res) => res.send('Hello World!'))

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});