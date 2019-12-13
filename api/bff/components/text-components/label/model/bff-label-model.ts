import { BFFTextProperties } from './../../interface/text-component-interface'

class BFFLabelModel {
    
    // MARK: Properties

    value: string
    properties: BFFTextProperties

    // MARK: Initializers

    constructor(value: string, properties: BFFTextProperties) {
        this.value = value
        this.properties = properties
    }
}



export { BFFLabelModel }