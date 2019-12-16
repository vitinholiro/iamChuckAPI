
import mongoose = require('mongoose')

class Configuration {
    
    configureEnvironment() {
        var env = process.env.NODE_ENV || 'development';
    
        console.log('Environment => ', env);
    
        if (env === 'development' || env === 'test') {
            var config = require('./config.json');
            var envConfig = config[env];
    
            Object.keys(envConfig).forEach((key) => {
                process.env[key] = envConfig[key];
            });
        }

        this.configureDatabase(process.env.MONGODB_URI as string)
    }
    
    configureDatabase(uri: string) {
        console.log("Database Connected!")
        mongoose.connect(uri, { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true })
        mongoose.Promise = global.Promise
    }
}

let config = new Configuration()
config.configureEnvironment()


