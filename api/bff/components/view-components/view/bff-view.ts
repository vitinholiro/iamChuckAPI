
import { BFFViewModel } from './model/bff-view-model'
import { BFFViewProperties } from './../interface/view-component-interface'

// MARK: Interface

export interface BFFViewComponent {
    properties: BFFViewProperties
}

export class BFFView implements BFFViewComponent {

    // MARK: Initializers

    constructor(
        public properties: BFFViewProperties,) {
            this.properties = properties
    }

    // MARK: Functions
    
    generate() {
        return new BFFViewModel(new BFFViewProperties(this.properties.width, this.properties.height))
    }
}