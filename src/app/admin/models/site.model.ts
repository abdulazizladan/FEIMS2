/* Site form data */
export interface Site{
    /* Site description */
        name : string,
        code : string,
        state: string,
        lga: string,
        street_address: string,
        measurement: number, //meters
        level: number, //meters above sea level
        position: {
            longitude: number,
            latitude: number
        },
        comment: string,
    /* Gate */
    gate: {
        description: string,
        size: number, //meter
        thickness: number, //millimeters
        condition: string, //working|not_working|repairable
        damage: number, //percentage 25|50|75
        cost_of_repair: number, //naira
    },
    /* Fence */
    fence: {
        description: string,
        fence_height: number, //metres
        perimeter: number, //metres
        concrete_work: number, //cubic meters
        block_work: number, //square meters
        form_work: number, //square meters
        reinforcement: number, //kilogram
        rendering: number, //square meters
        barb_wire: number, //meters
        condition: string, //working|not_working|repairable
        damage: number, //percentage 25|50|75
        cost_of_repair: number,
    },    
    /* Roads */
    roads: {
        description: string,
        width: number, //meters
        length: number, //meters
        surface_dressing: number, //square meters
        condition: string, //working|not_working|repairable
        damage: number, //percentage 25|50|75
        cost_of_repair: number //naira
    },    
    /* Paths & pavement */
    paths: {
        description: string,
        width: number, //meters
        length: number, //meters
        surface_dressing: number, //square meters
        condition: string, //working|not_working|repairable
        damage: number, //percentage 25|50|75
        cost_of_repair: number, //naira
    },    
    /* Driveway */
    driveway: {
        description: string,
        width: number, //meters
        length: number, //meters
        surface_dressing: number, //square meters
        condition: string, //working|not_working|repairable
        damage: number, //percentage 25|50|75
        cost_of_repair: number, //naira
    },    
    /* Drainage */
    drainage: {
        //description: string,
        depth: number, //meters
        length: number, //meters
        concrete_work: number, //cubic meters
        block_work: number, //square meters
        form_work: number, //square meters
        reinforcement: number, //kilogram
        rendering: number, //square meters
        condition: string, //working|not_working|repairable
        damage: number, //percentage 25|50|75
        cost_of_repair: number //naira
    },    
    /* Electricity */
    electricity: {
        //description: string,
        piping_and_accessories: number, //meters
        cabling: number, //meters
        sources: [string], 
        condition: string, //working|not_working|repairable
        damage: number, //percentage 25|50|75
        cost_of_repair: number //naira
    },    
    /* Water */
    water: {
        //description: string,
        piping_and_accessories: number, //meters
        cabling: number, //meters
        sources: [string], 
        condition: string, //working|not_working|repairable
        damage: number, //percentage 25|50|75
        cost_of_repair: number //naira
    },
    /* Steps */
    steps: null| {
        //description: string,
        concrete_work: number,
        width: number,
        length: number,
        quantity: number,
        surface_dressing: number,
        condition: string //tarred|untarred|graded|potholes|bad_patches
        damage: number, //percentage 25|50|75
        cost_of_repair: number //naira
    },
    /* Gas tanks */
    gas_tanks: null|{
        //description: string,
        quantity: number 
        condition: string, //working|not_working|repairable
        damage: number, //percentage 25|50|75
        cost_of_repair: number //naira
    },
    /* Ramps */
    ramps: null|{
        //description: string,
        width: number,
        sloping_length: number,
        concrete_work: number, //cubic meters
        condition: string //tarred|untarred|graded|potholes|bad_patches
        cost_of_repair: number //naira
    },
    /* Street lights */
    street_lights: null|{
        //description: string,
        quantity: number,
        height: number,
        condition: string, //working|not_working|incomplete/repairable|obsolete
        cost_of_repair: number //naira
    },
    /* Waste site */
    waste_site: null|{
        //description: string,
        length: number,
        width: number,
        position: {
            longitude: number,
            latitude: number
        },
        condition: string //working|not_working|incomplete/repairable|obsolete

    }
}