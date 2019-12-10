
const BFFLabel = require('./Label/BFFLabel')

class BFFComponents {

    constructor() {}

    static generateLabelWith(value, properties) {
        return BFFLabel.generateWith(value, properties)
    }
}

module.exports = BFFComponents