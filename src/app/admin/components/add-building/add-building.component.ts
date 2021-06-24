import { Component, OnInit, OnDestroy } from '@angular/core';
import { BuildingService } from '../../services/building.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { building } from '../../models/building.model';

/** Add-building component */
@Component({
  selector: 'app-add-building',
  templateUrl: './add-building.component.html',
  styleUrls: ['./add-building.component.scss']
})
export class AddBuildingComponent implements OnInit {

  public appearance: string = "fill";

  public buildingForm: FormGroup;

  public hasElevator: boolean = false;
 
  resetForm(){

  }

  constructor( private buildingService: BuildingService, private fb: FormBuilder) { 
    
  }

  ngOnInit(): void{
    this.initForm();
  }

  initForm(): void{
    this.buildingForm = this.fb.group({      
      structure: this.fb.group({
        name: ['', [Validators.required]],
        code: ['', [Validators.required]],
        year_built: [0, [Validators.required]],
        position: this.fb.group({
          longitude: [0, []],
          latitude: [0, []]
        }),
        purpose: ['', [Validators.required]], //residential/office/multiple
        comment: ['', [Validators.required]], //any other detail not captured
        dimensions: this.fb.group({
          floor_area: [0, []],//square meters
          wall_area: [0, []], //square meters
          ceiling_area: [0, []], //square meters
          floors: [1, [Validators.min(1)]] //floor count
        })
      }),
      super_structure: this.fb.group({
        type: ['', []],
        under_concrete: this.fb.group({
          concrete_work: [0, []],
          form_work: [0, []],
          reinforcement: [0, []]
        }),
        under_block: this.fb.group({
          brick_work: [0, []]
        }),
        under_crack_tiles: this.fb.group({
          size: [0, []],
          type: ['', []],
          quantity: [0, []]
        }),
        under_alucobond: this.fb.group({
          size: [0, []],
          type: ['', []],
          accessories: ['', []],
          quantity: [0, []]
        }),
        condition: ['', []],
        cost_of_repair: [0, []]
      }),
      walls: this.fb.group({
        wall_type: ['', []],
        quantity: [0, []],
        last_decorated: [0, []],
        has_stain:[false, []],
        concrete_wall: this.fb.group({
          condition: ['', []],
          quantity: [0, []],
          cost_of_repair: [0, []]
        }),
        paint: this.fb.group({
          condition: ['', []],
          quantity: [0, []],
          cost_of_repair: [0, []]
        }),
        mortar: this.fb.group({
          condition: ['', []],
          quantity: [0, []],
          cost_of_repair: [0, []]
        }),
        structure: this.fb.group({
          type: ['', []],
          quantity: [0, []],
          damage: [0, []],
          condition: ['', []],
          cost_of_repair: [0, []]
        }),
        trimming: this.fb.group({
          quantity: [0, []],
          finishes: [0, []],
          condition: ['', []],
          cost_of_repair: [0, []]
        }),
        frame: this.fb.group({
          concrete_work: [0, ''], //cubic meter
          finishes: [0, []], //square meters
          form_work: [0, []], //square meters
          quantity: [0, []],
          reinforcement: [0, []], //kilogram
          damage: [0, []], //percentage 25|50|75
          cost_of_repair: [0, []] //naira
        }),
        facade: this.fb.group({
          concrete_work: [0, []], //cubic meter
          finishes: [0, []], //square meters
          form_work: [0, []], //square meters
          type: ['', []],
          quantity: [0, []], //square meters
          damage: [0, []], //percentage 25|50|75
          cost_of_repair: [0, []] //naira,
        }),
        corridors: this.fb.group({
          quantity: [0, []],
          type: ['', []],
          condition: ['', []], //excellent|good|fair|poor
          cost_of_repair: [0, []]//naira
        }),
        interior_wall: this.fb.group({
          finishing: ['', []], //metal|wood|sheetrock|plaster|concrete|brick|paneling|other
          size: [0, []], //square meter
          type: ['', []], 
          accessories: ['', []],
          quantity: [0, []], //count
          condition: ['', []], //excellent|good|fair|poor
          cost_of_repair: [0, []] //naira
        }),
        windows: this.fb.group({
          material: ['', []], //wire_glass|glass_block|plate|tempered|operating|fixed|other
          size: [0, []], //square meter
          type: ['', []],
          quantity: [0, []], //count
          condition: ['', []], //excellent|good|fair|poor
          cost_of_repair: [0, []] //naira
        })
      }),
      floor: this.fb.group({
        joints_and_beams: this.fb.group({
          concrete_work: [0, []], //cubic meter
          finishes: [0, []], //square meter
          form_work: [0, []], //square meter
          quantity: [0, []], //square meter
          damage: [0, []], //percentage 25|50|75,
          cost_of_repair: [0, []] //naira
        }), 
        slabs: this.fb.group({
          concrete_work: [0, []], //cubic meter
          finishes: [0, []], //square meter
          form_work: [0, []], //square meter
          quantity: [0, []], //cubic meter
          reinforcement: [0, []], //kilogram
          damage: [0, []], //percentage 25|50|75,
          cost_of_repair: [0, []] //naira
        }),
        foundation: this.fb.group({
          type: ['', []],
          depth: [0, []], //meters
          filling: [0, []], //cubic meters
          excavation: [0, []], //cubic meter
          concrete_work: [0, []], //cubic meters
          block_work: [0, []], //square meters
          form_work: [0, []], //square_meters
          reinforcement: [0, []], //kilograms
          rendering: [0, []], //square meters
          dpm: [0, []], //square meters of damp proof membrane
          damage: [0, []], //percentage 25|50|75,
          cost_of_repair: [0, []] //naira
        }),
        floor_structure: this.fb.group({
          material: ['', []], //metal|wood|concrete|other
          size: [0, []], //square meter
          type: ['', ''],
          accessories: ['', []],
          quantity: [0, []],
          condition: ['', []], //excellent|good|fair|poor
          cost_of_repair: [0, []] //naira
        }),
        floor_covering: this.fb.group({
          material: ['', []], //metal|wood|concrete|vinyl|other
          size: [0, ''], //square meter
          type: ['', []],
          accessories: ['', []],
          quantity: [0, []],
          condition: ['', []], //excellent|good|fair|poor
          cost_of_repair: [0, []] //naira
        })
      }),
      roof: this.fb.group({
        style: ['', [Validators.required]],
        size: [0, []],
        damage: [0, []],
        condition: ['', []],
        cost_of_repair: [0, []],
        support: this.fb.group({
          type: ['', []], //joist|truss|ridge_frame|arch|dome|cable|other
          size: [0, []], //meter
          quantity: [0, []],
          damage: [0, []], //percentage 25|50|75,
          condition: ['', []], //excellent|good|fair|poor,
          cost_of_repair: [0, []], //naira
        }),
        steel_truss: this.fb.group({
          type: ['', []], //joist|truss|z-purlins|cleats|bolts|cables
          size: [0, []], //kilograms,
          quantity: [0, []],
          damage: [0, []], //percentage 25|50|75,
          condition: ['', ''], //excellent|good|fair|poor,
          cost_of_repair: [0, []], //naira
        }),
        decking: this.fb.group({
          type: ['', []], //metal|wood|concrete|other
          size: [0, []], //cubic meter
          quantity: [0, []],
          damage: [0, []], //percentage 25|50|75,
          condition: ['', ''], //excellent|good|fair|poor,
          cost_of_repair: [0, []], //naira
        }),
        covering: this.fb.group({
          type: ['', ''], //asbestos|zinc|aluminium|stone_coated_tiles|other
          size: [0, []], //square meter
          quantity: [0, []],
          damage: [0, []], //percentage 25|50|75,
          condition: ['', []], //excellent|good|fair|poor,
          cost_of_repair: [0, []], //naira
        }),
        ceiling: this.fb.group({
          type: ['', []],
          size: [0, []], //square meter
          quantity: [0, []], //count
          damage: [0, []], //percentage 25|50|75,
          cost_of_repair: [0, []] //naira
        })
      })
    })
  }

  elevatorForm: FormGroup = this.fb.group({
    count: this.fb.group({
      passenger: [0, []],
      freight: [0, []],
      fire_service: [0, []]
    }),
    type: this.fb.group({
      electric: [0, []],
      hydraulic: [0, []]
    }),
    electric_eye: [false, []],
    heat_sensor: [false, []],
    key_location: ['', []],
    brand_name: ['', []],
    service_company: ['', []],
    phone: ['', []],
    smergency_shutoff_location: ['', []],
    elevator_exits: this.fb.group({
      top: [0, []],
      side: [0, []],
      dumb_waiter: [0, []],
      laundry_chute: [0, []],
      trash_chute: [0, []],
      other: [0, []]
    })
  });

  addElevator(): void {
    this.hasElevator = true;
    this.buildingForm.addControl('elevator', this.elevatorForm)
  }

  removeElevator(): void {
    this.hasElevator = false
    this.buildingForm.removeControl('elevator')
  }

  ngOnDestroy(){

  }

  /**
   * Submits building data form
   */
  submit (){
    console.log(this.buildingForm.value)
    //this.buildingService.addBuilding('').subscribe()
  }

}