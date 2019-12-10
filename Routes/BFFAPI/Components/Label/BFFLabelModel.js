
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
}