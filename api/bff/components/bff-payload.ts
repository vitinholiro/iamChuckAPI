
import { BFFViewProperties } from '../../bff/components/view-components/interface/view-component-interface';
import { BFFViewModel } from './view-components/view/model/bff-view-model';

export class BFFPayload {
    
    components(items: JSON) {
        return {
            components: [
                items
            ]
        }
    }

    view(items: any, properties: any) {
        return {
            view: this.components(items),
            properties
        }
    }
}