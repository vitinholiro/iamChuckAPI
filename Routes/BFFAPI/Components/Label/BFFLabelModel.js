
class BFFLabelModel {
    value = ""
    properties = new BFFLabelProperties()

    constructor(value, properties) {
        this.value = value
        this.properties = properties
    }
}

class BFFLabelProperties {
    color = ""
    size = 0
    weight = ""

    constructor(color, size, weight) {
        this.color = color
        this.size = size
        this.weight = weight
    }
}

module.exports = { BFFLabelModel, BFFLabelProperties }