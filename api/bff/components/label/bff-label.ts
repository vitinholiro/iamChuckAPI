
import { BFFLabelModel, BFFLabelProperties } from './model/bff-label-model'

export class BFFLabel {

    // MARK: Functions
    
    generateWith(value: string, properties: BFFLabelProperties) {
        return new BFFLabelModel(value, properties)
    }
}