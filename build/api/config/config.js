"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose = require("mongoose");
var Configuration = /** @class */ (function () {
    function Configuration() {
    }
    Configuration.prototype.configureEnvironment = function () {
        var env = process.env.NODE_ENV || 'development';
        console.log('Environment => ', env);
        if (env === 'development' || env === 'test') {
            var config = require('./config.json');
            var envConfig = config[env];
            Object.keys(envConfig).forEach(function (key) {
                process.env[key] = envConfig[key];
            });
        }
        this.configureDatabase(process.env.MONGODB_URI);
    };
    Configuration.prototype.configureDatabase = function (uri) {
        console.log("Database Connected!");
        mongoose.connect(uri, { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true });
        mongoose.Promise = global.Promise;
    };
    return Configuration;
}());
var config = new Configuration();
config.configureEnvironment();
