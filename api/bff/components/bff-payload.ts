
export class BFFPayload {
    
    components(items: JSON) {
        return {
            components: [
                items
            ]
        }
    }

    view(items: any) {
        return {
            view: this.components(items)
        }
    }
}