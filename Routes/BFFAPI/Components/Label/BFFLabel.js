
const BFFLabelModel = require('./BFFLabelModel')

class BFFLabel {

    static generateWith(value, properties) {
        return new BFFLabelModel(value, properties)
    }
}

module.exports = BFFLabel