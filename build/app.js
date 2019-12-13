"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var HomeRoutes = require("./api/routes/home-routes");
// Create a new express application instance
var app = express();
var port = process.env.PORT;
var bodyParser = require('body-parser');
var helmet = require('helmet');
// - Routes
var ChuckRoutes = require('./api/chuck/routes/chuck-routes').ChuckRoutes;
// - Middlewares
app.use(bodyParser.json());
app.use(helmet());
// - Routes
app.use('/chuck-api', ChuckRoutes);
app.use('/bff-api', HomeRoutes);
app.get('/', function (req, res) { return res.send('Hello World!'); });
app.listen(3000, function () {
    console.log('Example app listening on port 3000!');
});
