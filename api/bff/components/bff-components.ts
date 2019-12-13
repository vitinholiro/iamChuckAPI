
import { BFFLabel } from './label/bff-label'
import { BFFLabelProperties } from './label/model/bff-label-model'

export class BFFComponents {

    // MARK: Initializers

    constructor() {}

    // MARK: Functions

    public generateLabelWith(value: string, properties: BFFLabelProperties) {
        return new BFFLabel().generateWith(value, properties)
    }
}