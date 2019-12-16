
import mongoose = require('mongoose')
import * as jsonConfig from './config.json'

class Configuration {
    
    configureEnvironment() {
        var env = process.env.NODE_ENV || 'development';
    
        console.log('Environment => ', env);
    
        if (env === 'development' || env === 'test') {
            Object.entries(jsonConfig[env]).forEach(([key, value]) => {
                process.env[key] = value as string
            });

            this.configureDatabase(process.env.MONGODB_URI as string)
        }        
    }
    
    configureDatabase(uri: string) {
        console.log("Database Connected!")
        mongoose.connect(uri, { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true })
        mongoose.Promise = global.Promise
    }
}

let config = new Configuration()
config.configureEnvironment()


