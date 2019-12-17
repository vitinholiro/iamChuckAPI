
export interface BFFViewPropertiesInterface {
    width: number
    height: number
}

export class BFFViewProperties implements BFFViewPropertiesInterface {
    
    // MARK: Properties

    width: number
    height: number

    // MARK: Initializers

    constructor(width: number, height: number) {
        this.width = width
        this.height = height
    }
    
}

export class BFFViewAutomaticDimension {

    automaticDimension: Boolean

    constructor(automaticDimension: Boolean) {
        this.automaticDimension = automaticDimension
    }
}