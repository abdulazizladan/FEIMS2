import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Site } from 'app/admin/models/site.model';
import { addSite } from 'app/store/admin/admin.actions';
import { AdminState } from '../../../store/admin/admin.state';

@Component({
  selector: 'app-add-site',
  templateUrl: './add-site.component.html',
  styleUrls: ['./add-site.component.scss']
})
export class AddSiteComponent implements OnInit {

  expansionPanelStep: number = 0;

  public siteForm: FormGroup;//Site form
  public hasSteps: boolean;
  public hasGasTanks: boolean;
  public hasRamps: boolean;
  public hasStreetLights: boolean;
  public hasWasteSite: boolean;
  public hasOthers: boolean;

  constructor(private fb: FormBuilder, private store: Store<{ admin: AdminState }>) { }

  ngOnInit(): void {
    this.initializeForm();
  }

  initializeForm():void {

    this.siteForm = this.fb.group({
      site: this.fb.group({
        name: ['', [Validators.required]],
        code: ['', [Validators.required]],
        state: ['', [Validators.required]],
        lga: ['', [Validators.required]],
        street_address: ['', [Validators.required]],
        measurement: [0, [Validators.required]],
        level: [0, [Validators.required]],
        position: this.fb.group({
          longitude: [0, []],
          latitude: [0, []]
        }),
        map: ['', []],
        comment: ['', [Validators.required]]
      }),
      gate: this.fb.group({
        //description: ['', []],
        size: [0, []],
        thickness: [0, []],
        condition: ['', []],
        damage: [0, []],
        cost_of_repair: [0, []]
      }),
      fence: this.fb.group({
        //description: ['', []],
        fence_height: [0, []],
        perimeter: [0, []],
        concrete_work: [0, []],
        block_work: [0, []],
        form_work: [0, []],
        reinforcement: [0, []],
        rendering: [0, []],
        barb_wire: [0, []],
        condition: ['', []],
        damage: [0, []],
        cost_of_repair: [0, []]
      }),
      roads: this.fb.group({
        //description: ['', []],
        width: [0, []],
        length: [0, []],
        surface_dressing: [0, []],
        condition: ['', []],
        damage: [0, []],
        cost_of_repair: [0, []],
      }),
      paths: this.fb.group({
        //description: ['', []],
        width: [0, []],
        length: [0, []],
        surface_dressing: [0, []],
        condition: ['', []],
        damage: [0, []],
        cost_of_repair: [0, []]
      }),
      driveway: this.fb.group({
        //description: ['', []],
        width: [0, []],
        length: [0, []],
        surface_dressing: [0, []],
        condition: ['', []],
        damage: [0, []],
        cost_of_repair: [0, []]
      }),
      drainage: this.fb.group({
        //description: ['', []],
        depth: [0, []],
        length: [0, []],
        concrete_work: [0, []],
        block_work: [0, []],
        form_work: [0, []],
        reinforcement: [0, []],
        rendering: [0, []],
        condition: ['', []],
        damage: [0, []],
        cost_of_repair: [0, []]
      }),
      electricity: this.fb.group({
        //description: ['', []],
        piping_and_accessories: [0, []],
        cabling: [0, []],
        sources: ['', []],
        condition: ['', []],
        damage: [0, []],
        cost_of_repair: [0, []]
      }),
      water: this.fb.group({
        //description: ['', []],
        piping_and_accessories: [0, []],
        cabling: [0, []],
        sources: ['', []],
        condition: ['', []],
        damage: [0, []],
        cost_of_repair: [0, []]
      })    
    });
    this.hasSteps = false;
    this.hasGasTanks = false;
    this.hasRamps = false;
    this.hasStreetLights = false;
    this.hasWasteSite = false;
    this.hasOthers = false;

  }

  stepsForm: FormGroup = this.fb.group({
    //description: ['', []],
    concrete_work: [0, []],
    width: [0, ],
    length: [0, []],
    quantity: [0, []],
    surface_dressing: [0, []],
    condition: ['', []],
    damage: [0, []],
    cost_of_repair: [0, []]
  })

  addSteps():  void{
    this.hasSteps = true;
    this.siteForm.addControl("steps", this.stepsForm)
  }

  removeSteps(): void {
    this.hasSteps = false;
    this.siteForm.removeControl('steps');
  }

  gasTanksForm: FormGroup = this.fb.group({
    //description: ['', [Validators.required]],
    quantity: [0, [Validators.required]],
    condition: ['', [Validators.required]],
    damage: [0, [Validators.required]],
    cost_of_repair: [0, [Validators.required]]
  })

  addGasTanks(): void {
    this.hasGasTanks = true;
    this.siteForm.addControl('gas_tanks', this.gasTanksForm)
  }

  removeGasTanks(): void {
    this.hasGasTanks = false;
    this.siteForm.removeControl('gas_tanks');
  }

  rampsForm: FormGroup = this.fb.group({
    //description: ['', [Validators.required]],
    width: [0, [Validators.required]],
    sloping_length: [0, [Validators.required]],
    concrete_work: [0, [Validators.required]],
    condition: ['', [Validators.required]],
    cost_of_repair: [0, [Validators.required]]
  })
  addRamps(): void {
    this.hasRamps = true;
    this.siteForm.addControl('ramps', this.rampsForm);
  }

  removeRamps(): void {
    this.hasRamps = false;
  }

  streetLights: FormGroup = this.fb.group({
    //description: ['', [Validators.required]],
    quantity: [0, [Validators.required]],
    height: [0, [Validators.required]],
    condition: ['', [Validators.required]],
    cost_of_repair: [0, [Validators.required]]
  })

  addStreetLights(): void {
    this.hasStreetLights = true;
  }

  removeStreetLights(): void {
    this.hasStreetLights = false;
  }

  wasteSite: FormGroup = this.fb.group({
    //description: ['', [Validators.required]],
    length: [0, [Validators.required]],
    width: ['', [Validators.required]],
    position: this.fb.group({
      longitude: [0, [Validators.required]],
      latitude: [0, [Validators.required]]
    }),
    cost_of_repair: [0, [Validators.required]]
  })

  addWasteSite(): void {
    this.hasWasteSite = true;
  }

  removeWasteSite(): void {
    this.hasWasteSite = false;
  }

  setPanelStep( index: number) {
    this.expansionPanelStep = index;
  }

  prevStep() {
    this.expansionPanelStep--;
  }

  nextStep() {
    this.expansionPanelStep++;
  }

  get steps(): FormArray {
    return this.siteForm.get('steps') as FormArray;
  }

  //submit(site: Site) {
  //  this.store.dispatch(addSite({site}));
  //  console.log(this.siteForm.value)
  //}

  submit() {
    let site = this.siteForm.value;
    this.store.dispatch(addSite({site}))
  }

  resetForm() {
    
  }

}
