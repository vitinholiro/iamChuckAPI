
export class BFFViewProperties {
    
    // MARK: Properties

    width: Number
    height: Number

    // MARK: Initializers

    constructor(width: Number, height: Number) {
        this.width = width
        this.height = height
    }
}

export class BFFViewAutomaticDimension {

    automatic: Boolean

    constructor(automatic: Boolean) {
        this.automatic = automatic
    }
}