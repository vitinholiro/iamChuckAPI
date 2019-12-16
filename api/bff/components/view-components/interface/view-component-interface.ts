import { BFFLayerComponentInterface } from './layer-component-interface'

export interface BFFViewComponentInterface {
    frame: BFFViewSizeComponentInterface
    layer: BFFLayerComponentInterface
}

export interface BFFViewSizeComponentInterface {
    width: number
    height: number
}


export class BFFViewProperties implements BFFViewComponentInterface{
    
    // MARK: Properties

    frame: BFFViewSizeComponentInterface
    layer: BFFLayerComponentInterface

    // MARK: Initializers

    constructor(frame: BFFViewSizeComponentInterface, layer: BFFLayerComponentInterface) {
        this.frame = frame
        this.layer = layer
    }
}