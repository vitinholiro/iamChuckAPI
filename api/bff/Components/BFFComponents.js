
const BFFLabel = require('./label/BFFLabel')

class BFFComponents {

    constructor() {}

    static generateLabelWith(value, properties) {
        return BFFLabel.generateWith(value, properties)
    }
}

module.exports = BFFComponents