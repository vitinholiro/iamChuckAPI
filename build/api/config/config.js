"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose = require("mongoose");
var jsonConfig = __importStar(require("./config.json"));
var Configuration = /** @class */ (function () {
    function Configuration() {
    }
    Configuration.prototype.configureEnvironment = function () {
        var env = process.env.NODE_ENV || 'development';
        console.log('Environment => ', env);
        if (env === 'development' || env === 'test') {
            Object.keys(jsonConfig[env]).forEach(function (key, number, items) {
                process.env[key] = items[number];
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
