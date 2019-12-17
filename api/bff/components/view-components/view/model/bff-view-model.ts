import { BFFViewProperties, BFFViewPropertiesInterface } from './../../interface/view-component-interface'

export class BFFViewModel {

    // MARL: Properties

    properties: BFFViewProperties

    // MARK: Initializers
    
    constructor(properties: BFFViewProperties) {
        this.properties = properties
    }
}