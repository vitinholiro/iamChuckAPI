
const { BFFLabelModel } = require('./bff-label-model')

class BFFLabel {

    static generateWith(value, properties) {
        return new BFFLabelModel(value, properties)
    }
}

module.exports = BFFLabel