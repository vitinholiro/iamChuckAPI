
import { BFFViewModel } from './view-components/view/model/bff-view-model'
import { BFFViewProperties, BFFViewSizeComponentInterface } from './view-components/interface/view-component-interface'

export class BFFPayload {
    
    components(items: JSON) {
        return {
            components: [
                items
            ]
        }
    }

    view(items: JSON) {
        return {
            view: this.components(items),
            properties: BFFViewProperties
        }
    }

}