export interface Building{
  _id?: string,
  structure: {
    name: string, //given name
    code: null | string, //3 to 4 length string used to identify the building
    yearBuilt: number, //Year building was completed
    position: {
      longitude: number,
      latitude: number 
    },
    purpose: string, //residential, academic, theater, multipurpose
    //comment: string, //removed
    dimensions: {
      floor_area: number, //square meters
      wallArea: number, //square meters
      ceiling_area: number, //square meters
      floors: number, //count
    },
      /*---- Super structure ----*/
    superStructure: {
      structureType: string, //metal|wood|concrete|block|brick|brick veneer|alucoBond|crack_tiles|others
      underConcrete: {
        //description: string,
        concreteWork: number, //cubic meter
        formWork: number, //square meter
        brickWork: number //square meters
        reinforcement: number, //kilogram        
      },
      underCrackTiles: {
        size: number, //square meters
        type: string,
        quantity: number //count 
      },
      underAlucobond: {
        size: number, //square meter
        type: string,
        accessories: string[],
        quantity: number
      },
      condition: string, //excellent|good|fair|poor
      costOfRepair: number //naira
    },
      
    walls: {
      wall_type: string, //concrete_wall|150mm_block_wall|225mm_block_wall|other
      //description: string,
      quantity: number, //cubic meter
      lastDecorated: number, //year
      hasStain: boolean, //mildew|discoloration
      concreteWall: {
        condition: string, //excellent|good|fair|poor
        quantity: number, //square meter
        costOfRepair: number, //naira
      },
      paint: { 
        condition: string, //excellent|good|fair|poor
        //description: string,
        quantity: number, //square meter
        costOfRepair: number //naira
      },
      mortar: {
        condition: string, //excellent|good|fair|poor
        //description: string,
        quantity: number, //square meter
        costOfRepair: number //naira
      },
      structure: {
        type: string, //frame_structure, load_bearing
        //description: string,
        quantity: number, //cubic meter
        damage: number, //percentage 25|50|75
        condition: string, //excellent|good|fair|poor
        costOfRepair: number //naira
      },
      trimming: {
        quantity: number, //square meter
        finishes: string, 
        condition: string, //excellent|good|fair|poor,
        costOfRepair: number //naira
      },
      frame: {
        //description: string,
        concreteWork: number, //cubic meter
        finishes: number, //square meters
        formWork: number, //square meters
        quantity: number,
        reinforceemnt: number, //kilogram
        damage: number, //percentage 25|50|75
        costOfRepair: number //naira
      },
      facade: {
        //description: string,
        concreteWork: number, //cubic meter
        finishes: number, //square meters
        formWork: number, //square meters
        type: string,
        quantity: number, //square meters
        damage: number, //percentage 25|50|75
        costOfRepair: number //naira
      },
      corridors: [{ //make array
        quantity: number,
        type: string,
        condition: string, //excellent|good|fair|poor
        costOfRepair: number //naira
      }],
        /*--- Interior wall ---*/
      interiorWall: { //make array
        finishing: string, //metal|wood|sheetrock|plaster|concrete|brick|paneling|other
        size: number, //square meter
        type: string, 
        accessories: string,
        quantity: number, //count
        condition: string, //excellent|good|fair|poor
        costOfRepair: number //naira
      },
      /*--- Windows ---*/
      windows: { //make array
        material: string, //wire_glass|glass_block|plate|tempered|operating|fixed|other
        //description: string,
        size: number, //square meter
        type: string,
        quantity: number, //count
        condition: string, //excellent|good|fair|poor
        costOfRepair: number //naira
      },
    },
      

      /*-- Floor --*/
    floor: {
      jointsAndBeams: {
        //description: string,
        concreteWork: number, //cubic meter
        finishes: number, //square meter
        formWork: number, //square meter
        quantity: number, //square meter
        damage: number, //percentage 25|50|75,
        costOfRepair: number //naira
      },
      slabs: {
        //description: string,
        concreteWork: number, //cubic meter
        finishes: number, //square meter
        formWork: number, //square meter
        quantity: number, //cubic meter
        reinforcement: number, //kilogram
        damage: number, //percentage 25|50|75,
        costOfRepair: number //naira
      },
      foundation: {
        //description: string,
        type: string,
        depth: number, //meters
        filling: number, //cubic meters
        excavation: number, //cubic meter
        concreteWork: number, //cubic meters
        blockWork: number, //square meters
        formWork: number, //square_meters
        reinforcement: number, //kilograms
        rendering: number, //square meters
        dpm: number, //square meters of damp proof membrane
        damage: number, //percentage 25|50|75,
        costOfRepair: number //naira
      },
      /*--- Floor structure ---*/
      floorStructure: {
        material: string, //metal|wood|concrete|other
        size: number, //square meter
        type: string,
        accessories: string,
        qauntity: number,
        condition: string, //excellent|good|fair|poor
        costOfRepair: number //naira
      },

      /*--- Floor covering ---*/
      floorCovering: {
        material: string, //metal|wood|concrete|vinyl|other
        //description: string,
        size: number, //square meter
        type: string,
        accessories: string,
        qauntity: number,
        condition: string, //excellent|good|fair|poor
        costOfRepair: number //naira
      },
      
    },
      /*-- Roof --*/
    roof: {
      style: string, //flat|pitched|arched|butterfly|hip|gambrel|mansard|monitor|shed|dome|gable|other
      //description: string,
      size: number, //square meter
      //quantity: number,
      damage: number, //percentage 25|50|75,
      condition: string, //excellent|good|fair|poor,
      costOfRepair: number, //naira
      support: {
        type: string, //joist|truss|ridge_frame|arch|dome|cable|other
        //description: string,
        size: number, //meter
        quantity: number,
        damage: number, //percentage 25|50|75,
        condition: string, //excellent|good|fair|poor,
        costOfRepair: number, //naira
      },
      steelTruss: {
        type: string, //joist|truss|z-purlins|cleats|bolts|cables
        size: number, //kilograms,
        quantity: number,
        damage: number, //percentage 25|50|75,
        condition: string, //excellent|good|fair|poor,
        costOfRepair: number, //naira
      },
      decking: {
        type: string, //metal|wood|concrete|other
        //description: string,
        size: number, //cubic meter
        quantity: number,
        damage: number, //percentage 25|50|75,
        condition: string, //excellent|good|fair|poor,
        costOfRepair: number, //naira
      },
      covering: {
        type: string, //asbestos|zinc|aluminium|stone_coated_tiles|other
        size: number, //square meter
        quantity: number,
        damage: number, //percentage 25|50|75,
        condition: string, //excellent|good|fair|poor,
        costOfRepair: number, //naira
      },
      /*-- Ceilings --*/
      ceiling: {
        //description: string,
        type: string,
        size: number, //square meter
        quantity: number, //count
        damage: number, //percentage 25|50|75,
        costOfRepair: number //naira
      },
    },
    /*-- Elevator --*/
    elevator: null| {
      count: {
        passenger: number,
        freight: number,
        fireService: number,
        independent: number
      },
      type: {
        electric: number,
        hydraulic: number
      },
      electricEye: boolean,
      heatSensor: boolean,
      keyLocation: string,
      brandName: string,
      serviceCompany: string,
      phone: string,
      emergencyShotoffLocation: string,
      elevatorExits: {
        top: number,
        side: number,
        dumbWaiter: number,
        laundryChute: number,
        trashChute: number,
        other: number,
      },

    }
  },
  services: {
    roofLights: {
      size: number, //metres
      thickness: number,//meters
      quantity: number,
      condition: string,
      damage: number,
      costOfRepair: number

    },
    airConditioning: {
      pipingLength: number,
      quantity: number,
      condition: string,
      damage: number,
      costOfRepair: number
    },
    roofCovering: {
      height: number,
      slopingLength: number,
      quantity: number,
      condition: string,
      damage: number,
      costOfRepair: number
    },
    burglarProof: {
      type: string,
      quantity: number,
      location: string,
      condition: string,
      damage: number,
      costOfRepair: number
    },
    gates: { //make array
      quantity: number,
      condition: string,
      costOfRepair: number
    },
    drainage: {
      quantity: number,
      condition: string,
      costOfRepair: number
    },
    distribution: {
      quantity: number,
      condition: string,
      costOfRepair: number
    },

  }
}

