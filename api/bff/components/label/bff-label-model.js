
class BFFLabelModel {

    constructor(value, properties) {
        this.value = value
        this.properties = properties
    }
}

class BFFLabelProperties {
    
    constructor(color, size, weight) {
        this.color = color
        this.size = size
        this.weight = weight
    }
}

module.exports = { BFFLabelModel, BFFLabelProperties }