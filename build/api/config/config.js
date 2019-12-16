"use strict";
var __read = (this && this.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};
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
            Object.entries(jsonConfig[env]).forEach(function (_a) {
                var _b = __read(_a, 2), key = _b[0], value = _b[1];
                process.env[key] = value;
            });
            this.configureDatabase(process.env.MONGODB_URI);
        }
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
