
import { BFFLabel, BFFTextComponent } from './text-components/label/bff-label'
import { BFFTextProperties } from './text-components/interface/text-component-interface'

// MARK: Enums

export enum TypeComponent {
    label
}

export class BFFComponents {

    // MARK: Initializers

    constructor() {}

    // MARK: Functions

    public text(component: TypeComponent, value: string, properties: BFFTextProperties) : BFFTextComponent  {
        switch(component) {
            case TypeComponent.label:
                return new BFFLabel(value, properties).generate()
        }
    }
}