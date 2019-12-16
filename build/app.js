"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var bodyParser = require("body-parser");
// MARK: Environment
require('./api/config/config');
// MARK: Routes
var HomeRoutes = require("./api/app/home/routes/home-routes");
var ChuckRoutes = require("./api/chuck/routes/chuck-routes");
// MARK: Properties
var app = express();
var port = process.env.PORT || 3000;
var helmet = require('helmet');
// MARK: Middlewares
app.use(bodyParser.json());
app.use(helmet());
// MARK: Routes
app.use('/chuck-api', ChuckRoutes);
app.use('/bff-api', HomeRoutes);
// MARK: Listen APP
app.listen(port, function () {
    console.log("Chuck API listening on port " + port);
});
