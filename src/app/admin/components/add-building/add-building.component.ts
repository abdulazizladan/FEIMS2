import { Component, OnInit, OnDestroy } from '@angular/core';
import { BuildingService } from '../../services/building.service';
import { FormBuilder, FormGroup, FormArray, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { Subscription } from 'rxjs';
import { Store } from '@ngrx/store';
import { BuildingState } from 'app/store/building/building.state';
import { addBuilding } from 'app/store/building/building.actions';

/** Add-building component */
@Component({
  selector: 'app-add-building',
  templateUrl: './add-building.component.html',
  styleUrls: ['./add-building.component.scss']
})
export class AddBuildingComponent implements OnInit, OnDestroy {

  submitted: boolean = false;
  error: boolean = false;

  public buildingForm: FormGroup;

  public hasElevator: boolean = false;

  private subscription: Subscription;
 
  resetForm(){

  }

  submit (){
    const data = this.buildingForm.value;
    try{
      this.submitted = true;
      this.store.dispatch(addBuilding({building: data}))
      setTimeout(
        () => {
          this.dialogRef.close()
        },
        5000
      )
    }catch(error){

    }
  }

  constructor( 
    private fb: FormBuilder, 
    private store: Store<{ building: BuildingState}>,
    private dialogRef: MatDialogRef<any>) { 
    
  }

  ngOnInit(): void{
    this.initForm();
  }

  tap() {
    console.log(this.buildingForm.value)
  }
  ngOnDestroy(): void{

  }

  initForm(): void{
    
    this.buildingForm = this.fb.group({
      structure: this.fb.group({
        name: ['', [Validators.required]],
        code: ['', [Validators.required]],
        yearBuilt: [1900, [Validators.required, Validators.max(2022)]],
        position: this.fb.group({
          longitude: [0.00, []],
          latitude: [0.00, []]
        }),
        purpose: ['', [Validators.required]], //residential/office/multiple
        //comment: ['', [Validators.required]], //any other detail not captured
        dimensions: this.fb.group({
          floorArea: [0, [Validators.required]],//square meters
          wallArea: [0, []], //square meters
          ceilingArea: [0, []], //square meters
          floors: [1, [Validators.min(1), Validators.required]] //floor count
        })
      }),
      superStructure: this.fb.group({
        type: ['', [Validators.required]],
        underConcrete: this.fb.group({
          concreteWork: [0, []],
          formWork: [0, []],
          reinforcement: [0, []],
          brickWork: [0, []]
        }),
        underCrackTiles: this.fb.group({
          size: [0, []],//square meters
          type: ['', []],
          quantity: [0, []]//number
        }),
        underAlucobond: this.fb.group({
          size: [0, []], //square meters
          type: ['', []], //string
          //accessories: ['', []], //string[]
          accessories: this.fb.array([]),
          quantity: [0, []] //number
        }),
        condition: ['', [Validators.required]],
        costOfRepair: [0, [Validators.required]] //naira
      }),
      walls: this.fb.group({
        wallType: ['', [Validators.required]],
        quantity: [0, [Validators.required]],
        lastDecorated: [1900, []],
        hasStain:[false, []],
        concreteWall: this.fb.group({
          condition: ['', []],
          quantity: [0, []],
          costOfRepair: [0, []]
        }),
        paint: this.fb.group({
          condition: ['', []],
          quantity: [0, []],
          costOfRepair: [0, []]
        }),
        mortar: this.fb.group({
          condition: ['', []],
          quantity: [0, []],
          costOfRepair: [0, []]
        }),
        structure: this.fb.group({
          type: ['', []],
          quantity: [0, []],
          damage: [0, []],
          condition: ['', []],
          costOfRepair: [0, []]
        }),
        trimming: this.fb.group({
          quantity: [0, []],
          finishes: [0, []],
          condition: ['', []],
          costOfRepair: [0, []]
        }),
        frame: this.fb.group({
          concreteWork: [0, ''], //cubic meter
          finishes: [0, []], //square meters
          formWork: [0, []], //square meters
          quantity: [0, []],
          reinforcement: [0, []], //kilogram
          damage: [0, []], //percentage 25|50|75
          costOfRepair: [0, []] //naira
        }),
        facade: this.fb.group({
          concreteWork: [0, []], //cubic meter
          finishes: [0, []], //square meters
          formWork: [0, []], //square meters
          type: ['', []],
          quantity: [0, []], //square meters
          damage: [0, []], //percentage 25|50|75
          costOfRepair: [0, []] //naira,
        }),
        corridors: this.fb.group({
          quantity: [0, []],
          type: ['', []],
          condition: ['', []], //excellent|good|fair|poor
          costOfRepair: [0, []]//naira
        }),
        interiorWall: this.fb.group({
          finishing: ['', []], //metal|wood|sheetrock|plaster|concrete|brick|paneling|other
          size: [0, []], //square meter
          type: ['', []],
          accessories: ['', []],
          quantity: [0, []], //count
          condition: ['', []], //excellent|good|fair|poor
          costOfRepair: [0, []] //naira
        }),
        windows: this.fb.group({
          material: ['', []], //wire_glass|glass_block|plate|tempered|operating|fixed|other
          size: [0, []], //square meter
          type: ['', []],
          quantity: [0, []], //count
          condition: ['', []], //excellent|good|fair|poor
          costOfRepair: [0, []] //naira
        })
      }),
      floor: this.fb.group({
        jointsAndBeams: this.fb.group({
          concreteWork: [0, []], //cubic meter
          finishes: [0, []], //square meter
          formWork: [0, []], //square meter
          quantity: [0, []], //square meter
          damage: [0, []], //percentage 25|50|75,
          costOfRepair: [0, []] //naira
        }),
        slabs: this.fb.group({
          concreteWork: [0, []], //cubic meter
          finishes: [0, []], //square meter
          formWork: [0, []], //square meter
          quantity: [0, []], //cubic meter
          reinforcement: [0, []], //kilogram
          damage: [0, []], //percentage 25|50|75,
          costOfRepair: [0, []] //naira
        }),
        foundation: this.fb.group({
          type: ['', [Validators.required]],
          depth: [0, [Validators.required]], //meters
          filling: [0, []], //cubic meters
          excavation: [0, []], //cubic meter
          concreteWork: [0, []], //cubic meters
          blockWork: [0, []], //square meters
          formWork: [0, []], //square_meters
          reinforcement: [0, []], //kilograms
          rendering: [0, []], //square meters
          dpm: [0, []], //square meters of damp proof membrane
          damage: [0, []], //percentage 25|50|75,
          costOfRepair: [0, []] //naira
        }),
        floorStructure: this.fb.group({
          material: ['', [Validators.required]], //metal|wood|concrete|other
          size: [0, []], //square meter
          type: ['', ''],
          accessories: ['', []],
          quantity: [0, [Validators.required]],
          condition: ['', [Validators.required]], //excellent|good|fair|poor
          costOfRepair: [0, [Validators.required, Validators.min(0)]] //naira
        }),
        floorCovering: this.fb.group({
          material: ['', []], //metal|wood|concrete|vinyl|other
          size: [0, ''], //square meter
          type: ['', []],
          accessories: ['', []],
          quantity: [0, []],
          condition: ['', []], //excellent|good|fair|poor
          costOfRepair: [0, [Validators.required, Validators.min(0)]] //naira
        })
      }),
      roof: this.fb.group({
        style: ['', [Validators.required]],
        size: [0, []],
        damage: [0, []],
        condition: ['', []],
        costOfRepair: [0, []],
        support: this.fb.group({
          type: ['', [Validators.required]], //joist|truss|ridge_frame|arch|dome|cable|other
          size: [0, []], //meter
          quantity: [0, []],
          damage: [0, []], //percentage 25|50|75,
          condition: ['', [Validators.required]], //excellent|good|fair|poor,
          costOfRepair: [0, []], //naira
        }),
        steelTruss: this.fb.group({
          type: ['', []], //joist|truss|z-purlins|cleats|bolts|cables
          size: [0, []], //kilograms,
          quantity: [0, []],
          damage: [0, []], //percentage 25|50|75,
          condition: ['', ''], //excellent|good|fair|poor,
          costOfRepair: [0, []], //naira
        }),
        decking: this.fb.group({
          type: ['', []], //metal|wood|concrete|other
          size: [0, []], //cubic meter
          quantity: [0, []],
          damage: [0, []], //percentage 25|50|75,
          condition: ['', ''], //excellent|good|fair|poor,
          costOfRepair: [0, []], //naira
        }),
        covering: this.fb.group({
          type: ['', ''], //asbestos|zinc|aluminium|stone_coated_tiles|other
          size: [0, []], //square meter
          quantity: [0, []],
          damage: [0, []], //percentage 25|50|75,
          condition: ['', []], //excellent|good|fair|poor,
          costOfRepair: [0, []], //naira
        }),
        ceiling: this.fb.group({
          type: ['', []],
          size: [0, []], //square meter
          quantity: [0, []], //count
          damage: [0, []], //percentage 25|50|75,
          costOfRepair: [0, []] //naira
        })
      }),
      services: this.fb.group({
        roofLights: this.fb.group({
          size: [0, []],
          thickness: [0, []],
          quantity: [0, []],
          condition: ['', []],
          damage: [0, []],
          costOfRepair: [0, []]

        }),
        airConditioning: this.fb.group({
          pipingLength: [0, []],
          quantity: [0, []],
          condition: ['', []],
          damage: ['', []],
          costOfRepair: [0, []]

        }),
        roofCovering: this.fb.group({
          height: [0, []],
          slopingLength: [0, []],
          quantity: [0, []],
          condition: ['', []],
          damage: [0, []],
          costOfRepair: [0, []]

        }),
        burglarProof: this.fb.group({
          type: ['', []],
          quantity: [0, []],
          location: ['', []],
          condition: ['', []],
          damage: [0, []],
          costOfRepair: [0, []]

        }),
        gates: this.fb.group({
          quantity: [0, []],
          condition: ['', []],
          costOfRepair: [0, []]

        }),
        drainage: this.fb.group({
          quantity: [0, []],
          condition: ['', []],
          costOfRepair: [0, []]

        }),
        distribution: this.fb.group({
          quantity: [0, []],
          condition: ['', []],
          costOfRepair: [0, []]
        })
      }),

    })
  }

  elevatorForm: FormGroup = this.fb.group({
    count: this.fb.group({
      passenger: [0, [Validators.required]],
      freight: [0, [Validators.required]],
      fireService: [0, [Validators.required]]
    }),
    type: this.fb.group({
      electric: [0, [Validators.required]],
      hydraulic: [0, [Validators.required]]
    }),
    electricEye: [false, []],
    heatSensor: [false, []],
    keyLocation: ['', []],
    brandName: ['', []],
    serviceCompany: ['', []],
    phone: ['', []],
    emergencyShutoffLocation: ['', []],
    elevatorExits: this.fb.group({
      top: [0, []],
      side: [0, []],
      dumbWaiter: [0, []],
      laundryChute: [0, []],
      trashChute: [0, []],
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

  /**
   * @returns accessories as formArray
   */
  get accessories(): FormArray {
    return this.buildingForm.get('superStructure.underAlucobond.accessories') as FormArray;
  }


  addAlucobondAccessory(): void{
    this.accessories.push(this.fb.control('', Validators.required))
  }

  removeAlucobondAccessory(id: number): void{
    this.accessories.removeAt(id)
  } 

}