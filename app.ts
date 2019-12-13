import express = require('express');
import bodyParser = require('body-parser')

// MARK: Routes

import HomeRoutes = require('./api/routes/home-routes')
import ChuckRoutes = require('./api/chuck/routes/chuck-routes')

// MARK: Properties

const app = express();
const port = process.env.PORT || 3000
const helmet = require('helmet')

// MARK: Middlewares

app.use(bodyParser.json())
app.use(helmet())

// MARK: Routes

app.use('/chuck-api', ChuckRoutes);
app.use('/bff-api', HomeRoutes);
app.get('/', (req, res) => res.send('Hello World!'))

// MARK: Listen APP

app.listen(port, function () {
  console.log(`Chuck API listening on port ${port}`);
});