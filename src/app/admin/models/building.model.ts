export interface building{  
  structure: {
    name: string, //given name
    code: null | string, //3 to 4 length string used to identify the building
    year_built: number, //Year building was completed
    position: {
      longitude: number,
      latitude: number 
    },
    purpose: string, //residential, academic, theater, multipurpose
    comment: string, //
    dimension: {
      floor_area: number, //square meters
      wall_area: number, //square meters
      ceiling_area: number, //square meters
      floors: number, //count
    },
      /*---- Super structure ----*/
    superstructure: {
      type: string, //metal|wood|concrete|block|brick|brick veneer|alucoBond|crack_tiles|others
      under_concrete: {
        //description: string,
        concrete_work: number, //cubic meter
        form_work: number, //square meter
        reinforcement: number, //kilogram
      },
      under_block: {
        brick_work: number //square meters
      },
      under_crack_tiles: {
        size: number, //square meters
        type: string,
        quantity: number //count 
      },
      under_alucobond: {
        size: number, //square meter
        type: string,
        accessories: string[],
        quantity: number
      },
      condition: string, //excellent|good|fair|poor
      cost_of_repair: number //naira
    },
      
    walls: {
      wall_type: string, //concrete_wall|150mm_block_wall|225mm_block_wall|other
      //description: string,
      quantity: number, //cubic meter
      last_decorated: number, //year
      has_stain: boolean, //mildew|discoloration
      concrete_wall: {
        condition: string, //excellent|good|fair|poor
        quantity: number, //square meter
        cost_of_repair: number, //naira
      },
      paint: { 
        condition: string, //excellent|good|fair|poor
        //description: string,
        quantity: number, //square meter
        cost_of_repair: number //naira
      },
      mortar: {
        condition: string, //excellent|good|fair|poor
        //description: string,
        quantity: number, //square meter
        cost_of_repair: number //naira
      },
      structure: {
        type: string, //frame_structure, load_bearing
        //description: string,
        quantity: number, //cubic meter
        damage: number, //percentage 25|50|75
        condition: string, //excellent|good|fair|poor
        cost_of_repair: number //naira
      },
      trimming: {
        quantity: number, //square meter
        finishes: string, 
        condition: string, //excellent|good|fair|poor,
        cost_of_repair: number //naira
      },
      frame: {
        //description: string,
        concrete_work: number, //cubic meter
        finishes: number, //square meters
        form_work: number, //square meters
        quantity: number,
        reinforceemnt: number, //kilogram
        damage: number, //percentage 25|50|75
        cost_of_repair: number //naira
      },
      facade: {
        //description: string,
        concrete_work: number, //cubic meter
        finishes: number, //square meters
        form_work: number, //square meters
        type: string,
        quantity: number, //square meters
        damage: number, //percentage 25|50|75
        cost_of_repair: number //naira
      },
      corridors: {
        quantity: number,
        type: string,
        condition: string, //excellent|good|fair|poor
        cost_of_repair: number //naira
      },
        /*--- Interior wall ---*/
      interior_wall: {
        finishing: string, //metal|wood|sheetrock|plaster|concrete|brick|paneling|other
        size: number, //square meter
        type: string, 
        accessories: string[],
        quantity: number, //count
        condition: string, //excellent|good|fair|poor
        cost_of_repair: number //naira
      },
      /*--- Windows ---*/
      windows: {
        material: string, //wire_glass|glass_block|plate|tempered|operating|fixed|other
        //description: string,
        size: number, //square meter
        type: string,
        quantity: number, //count
        condition: string, //excellent|good|fair|poor
        cost_of_repair: number //naira
      },
    },
      

      /*-- Floor --*/
    floor: {
      joints_and_beams: {
        //description: string,
        concrete_work: number, //cubic meter
        finishes: number, //square meter
        form_work: number, //square meter
        quantity: number, //square meter
        damage: number, //percentage 25|50|75,
        cost_of_repair: number //naira
      },
      slabs: {
        //description: string,
        concrete_work: number, //cubic meter
        finishes: number, //square meter
        form_work: number, //square meter
        quantity: number, //cubic meter
        reinforcement: number, //kilogram
        damage: number, //percentage 25|50|75,
        cost_of_repair: number //naira
      },
      foundation: {
        //description: string,
        type: string,
        depth: number, //meters
        filling: number, //cubic meters
        excavation: number, //cubic meter
        concrete_work: number, //cubic meters
        block_work: number, //square meters
        form_work: number, //square_meters
        reinforcement: number, //kilograms
        rendering: number, //square meters
        dpm: number, //square meters of damp proof membrane
        damage: number, //percentage 25|50|75,
        cost_of_repair: number //naira
      },
      /*--- Floor structure ---*/
      floor_structure: {
        material: string, //metal|wood|concrete|other
        size: number, //square meter
        type: string,
        accessories: string[],
        qauntity: number,
        condition: string, //excellent|good|fair|poor
        cost_of_repair: number //naira
      },

      /*--- Floor covering ---*/
      floor_covering: {
        material: string, //metal|wood|concrete|vinyl|other
        //description: string,
        size: number, //square meter
        type: string,
        accessories: string[],
        qauntity: number,
        condition: string, //excellent|good|fair|poor
        cost_of_repair: number //naira
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
      cost_of_repair: number, //naira
      support: {
        type: string, //joist|truss|ridge_frame|arch|dome|cable|other
        description: string,
        size: number, //meter
        quantity: number,
        damage: number, //percentage 25|50|75,
        condition: string, //excellent|good|fair|poor,
        cost_of_repair: number, //naira
      },
      steel_truss: {
        type: string, //joist|truss|z-purlins|cleats|bolts|cables
        size: number, //kilograms,
        quantity: number,
        damage: number, //percentage 25|50|75,
        condition: string, //excellent|good|fair|poor,
        cost_of_repair: number, //naira
      },
      decking: {
        type: string, //metal|wood|concrete|other
        //description: string,
        size: number, //cubic meter
        quantity: number,
        damage: number, //percentage 25|50|75,
        condition: string, //excellent|good|fair|poor,
        cost_of_repair: number, //naira
      },
      covering: {
        type: string, //asbestos|zinc|aluminium|stone_coated_tiles|other
        size: number, //square meter
        quantity: number,
        damage: number, //percentage 25|50|75,
        condition: string, //excellent|good|fair|poor,
        cost_of_repair: number, //naira
      },
      /*-- Ceilings --*/
      ceiling: {
        //description: string,
        type: string,
        size: number, //square meter
        quantity: number, //count
        damage: number, //percentage 25|50|75,
        cost_of_repair: number //naira
      },
    },
    /*-- Elevator --*/
    elevator: null| {
      count: {
        passenger: number,
        freight: number,
        fire_service: number,
        independent: number
      },
      type: {
        electric: number,
        hydraulic: number
      },
      electric_eye: boolean,
      heat_sensor: boolean,
      key_location: string,
      brand_name: string,
      service_company: string,
      phone: string,
      emergency_shotoff_location: string,
      elevator_exits: {
        top: number,
        side: number,
        dumb_waiter: number,
        laundry_chute: number,
        trash_chute: number,
        other: number,
      },

    }
  },
  services: {
    roof_lights: {

    },

  }
}

