/** Low value equipment with high value */
export interface Lve{
    _id: string,
    name: string,
    code: string,
    quantity: number,
    serialNumber: null| string,
    dateCommissioned: Date,
    brand: string, //generic as default
    model: null | string,
    status: string,
    costOfRepair: number,
    comment: string
}