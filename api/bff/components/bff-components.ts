
import { BFFLabel, BFFTextComponent } from './text-components/label/bff-label'
import { BFFView, BFFViewComponent } from './view-components/view/bff-view'
import { BFFTextProperties } from './text-components/interface/text-component-interface'
import { BFFViewProperties } from './view-components/interface/view-component-interface'

// MARK: Enums

export enum TypeComponent {
    label,
    cell
}

export class BFFComponents {

    // MARK: Initializers

    constructor() {}

    // MARK: Functions

    public text(component: TypeComponent, value: string, properties: BFFTextProperties) : BFFTextComponent  {
        if(component === TypeComponent.label) {
            return new BFFLabel(value, properties).generate()
        } else {
            return new BFFLabel("undefined", properties).generate()
        }
    }

    public view(component: TypeComponent, properties: BFFViewProperties) : BFFViewComponent {
        if(component === TypeComponent.cell) {
            return new BFFView(properties).generate()
        } else {
            return new BFFView(properties).generate()
        }
    }
  
}