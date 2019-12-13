
export interface BFFTextComponentInterface {
    color: string
    size: number
    weight: string
}

export class BFFTextProperties implements BFFTextComponentInterface{
    
    // MARK: Properties

    color: string
    size: number
    weight: string

    // MARK: Initializers

    constructor(color: string, size: number, weight: string) {
        this.color = color
        this.size = size
        this.weight = weight
    }
}