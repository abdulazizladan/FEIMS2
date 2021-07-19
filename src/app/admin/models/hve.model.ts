export interface HVE{
    _id: string,
    name: string,
    code: string,
    serialNumber: string,
    hasManual: boolean,
    purchaseDate: Date,
    manufacturer: string,
    commissionDate: Date,
    model: null | string,
    dateManufactured: Date,
    dateAcquired: Date,
    position: {
        longitude: number,
        latitude: number
    },
    specifications: [
        {
            parameter: string,
            value: number
        }
    ],
    hasCircuitDiagram: boolean,
    condition: string,
    comment: string,
    damage: number,
    costOfRepair: number,
    components: null | [
        {
            name: string,
            description: string,
            quantity: number
        }
    ]
}