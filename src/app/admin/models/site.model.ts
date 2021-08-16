/* Site form data */
export interface Site{
    /* Site description */
        _id?: string,
        name : string,
        code : string,
        state: string,
        lga: string,
        streetAddress: string,
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
        costOfRrepair: number, //naira
    },
    /* Fence */
    fence: {
        description: string,
        fenceHeight: number, //metres
        perimeter: number, //metres
        concreteWork: number, //cubic meters
        blockWork: number, //square meters
        formWork: number, //square meters
        reinforcement: number, //kilogram
        rendering: number, //square meters
        barbWire: number, //meters
        condition: string, //working|not_working|repairable
        damage: number, //percentage 25|50|75
        costOfOepair: number,
    },    
    /* Roads */
    roads: {
        description: string,
        width: number, //meters
        length: number, //meters
        surfaceDressing: number, //square meters
        condition: string, //working|not_working|repairable
        damage: number, //percentage 25|50|75
        costOfRepair: number //naira
    },    
    /* Paths & pavement */
    paths: {
        description: string,
        width: number, //meters
        length: number, //meters
        surfaceDressing: number, //square meters
        condition: string, //working|not_working|repairable
        damage: number, //percentage 25|50|75
        costOfRepair: number, //naira
    },    
    /* Driveway */
    driveway: {
        description: string,
        width: number, //meters
        length: number, //meters
        surfaceDressing: number, //square meters
        condition: string, //working|not_working|repairable
        damage: number, //percentage 25|50|75
        costOfRepair: number, //naira
    },    
    /* Drainage */
    drainage: {
        //description: string,
        depth: number, //meters
        length: number, //meters
        concreteWork: number, //cubic meters
        blockWork: number, //square meters
        formWork: number, //square meters
        reinforcement: number, //kilogram
        rendering: number, //square meters
        condition: string, //working|not_working|repairable
        damage: number, //percentage 25|50|75
        costOfRepair: number //naira
    },    
    /* Electricity */
    electricity: {
        //description: string,
        pipingAndAccessories: number, //meters
        cabling: number, //meters
        sources: [string], 
        condition: string, //working|not_working|repairable
        damage: number, //percentage 25|50|75
        costOfRepair: number //naira
    },    
    /* Water */
    water: {
        //description: string,
        pipingAandAaccessories: number, //meters
        cabling: number, //meters
        sources: [string], 
        condition: string, //working|not_working|repairable
        damage: number, //percentage 25|50|75
        costOfRepair: number //naira
    },
    /* Steps */
    steps: null| {
        //description: string,
        concreteWork: number,
        width: number,
        length: number,
        quantity: number,
        surfaceDressing: number,
        condition: string //tarred|untarred|graded|potholes|bad_patches
        damage: number, //percentage 25|50|75
        costOfRepair: number //naira
    },
    /* Gas tanks */
    gasTanks: null|{
        //description: string,
        quantity: number 
        condition: string, //working|not_working|repairable
        damage: number, //percentage 25|50|75
        costOfRepair: number //naira
    },
    /* Ramps */
    ramps: null|{
        //description: string,
        width: number,
        slopingLength: number,
        concrete_work: number, //cubic meters
        condition: string //tarred|untarred|graded|potholes|bad_patches
        costOfRepair: number //naira
    },
    /* Street lights */
    streetLights: null|{
        //description: string,
        quantity: number,
        height: number,
        condition: string, //working|not_working|incomplete/repairable|obsolete
        costOfRepair: number //naira
    },
    /* Waste site */
    wasteSite: null|{
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