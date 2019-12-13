class BFFLabelModel {
    
    // MARK: Properties

    value: string
    properties: BFFLabelProperties

    // MARK: Initializers

    constructor(value: string, properties: BFFLabelProperties) {
        this.value = value
        this.properties = properties
    }
}

class BFFLabelProperties {
    
    // MARK: Properties

    color: string
    size: number
    weight: string

    // MARK: Initializers

    constructor(color: string, size: number, weight: string) {
        this.color = color
        this.size = size
        this.weight = weight
    }
}

export { BFFLabelModel, BFFLabelProperties }