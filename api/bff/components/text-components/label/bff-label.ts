
import { BFFLabelModel } from './model/bff-label-model'
import { BFFTextProperties } from './../interface/text-component-interface'

// MARK: Interface

export interface BFFTextComponent {
    value : string
    properties: BFFTextProperties
}

export class BFFLabel implements BFFTextComponent {

    // MARK: Initializers

    constructor(
        public value: string,
        public properties: BFFTextProperties) {
        this.value = value
        this.properties = properties
    }

    // MARK: Functions
    
    generate() {
        return new BFFLabelModel(this.value, this.properties)
    }
}