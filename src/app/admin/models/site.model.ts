/* Site form data */
export interface Site{
    /* Site general data */
    name : string,
    code : string,
    state: string,
    lga: string,
    street_address: string,
    site_measurement: number,
    site_level: number,
    site_longitude: number,
    site_latitude: number,
    site_comment: string,
    /* Gate */
    gate_description: string,
    gate_size: number,
    gate_thickness: number,
    gate_quantity: number,
    gate_condition: string,
    gate_damage: number,
    gate_cost_of_repair: number,
    /* Fence */
    fence_descriptio: string,
    fence_height: number,
    perimeter: number,
    fence_quantity: number,
    fence_concrete_work: number,
    fence_block_work: number,
    fence_form_work: number,
    fence_reinforcement_work: number,
    fence_rendering: number,
    fence_barb_wire: number,
    fence_condition: string,
    fence_damage: number,
    fence_cost_of_repair: number,
    /* */
}