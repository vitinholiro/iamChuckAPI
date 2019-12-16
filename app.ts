import express = require('express');
import bodyParser = require('body-parser')

// MARK: Environment

require('./api/config/config.ts')


// MARK: Routes

import HomeRoutes = require('./api/app/home/routes/home-routes')
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

// MARK: Listen APP

app.listen(port, function () {
  console.log(`Chuck API listening on port ${port}`);
});