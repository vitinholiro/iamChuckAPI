
const BFFLabel = require('./label/bff-label')

class BFFComponents {

    constructor() {}

    static generateLabelWith(value, properties) {
        return BFFLabel.generateWith(value, properties)
    }
}

module.exports = BFFComponents