export interface building{
  structure: {
    dimension: {
      floor_area: number, //square meters
      wall_area: number, //square meters
      ceiling_area: number, //square meters
      floors: number, //count
      /*---- Super structure ----*/
      superstructure: {
        type: string, //metal|wood|concrete|block|brick|brick veneer|alucoBond|crack_tiles|others
        under_concrete: {
          description: string,
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
        description: string,
        size: number, //square meter
        type: string,
        accessories: string[],
        qauntity: number,
        condition: string, //excellent|good|fair|poor
        cost_of_repair: number //naira
      },

      /*--- Windows ---*/
      windows: {
        material: string, //wire_glass|glass_block|plate|tempered|operating|fixed|other
        description: string,
        size: number, //square meter
        type: string,
        quantity: number, //count
        condition: string, //excellent|good|fair|poor
        cost_of_repair: number //naira
      }
    }
  }
}
