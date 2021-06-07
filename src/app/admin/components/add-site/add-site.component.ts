import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SiteService } from '../../services/site.service'

@Component({
  selector: 'app-add-site',
  templateUrl: './add-site.component.html',
  styleUrls: ['./add-site.component.scss']
})
export class AddSiteComponent implements OnInit {

  expansionPanelStep: number = 0;

  public siteForm: FormGroup;//Site form

  constructor( private siteService: SiteService, private fb: FormBuilder) { }

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
        description: ['', []],
        size: [0, []],
        thickness: [0, []],
        condition: ['', []],
        damage: [0, []],
        cost_of_repair: [0, []]
      }),
      fence: this.fb.group({
        description: ['', []],
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
        description: ['', []],
        width: [0, []],
        length: [0, []],
        surface_dressing: [0, []],
        condition: ['', []],
        damage: [0, []],
        cost_of_repair: [0, []],
      }),
      paths: this.fb.group({
        description: ['', []],
        width: [0, []],
        length: [0, []],
        surface_dressing: [0, []],
        condition: ['', []],
        damage: [0, []],
        cost_of_repair: [0, []]
      }),
      driveway: this.fb.group({
        description: ['', []],
        width: [0, []],
        length: [0, []],
        surface_dressing: [0, []],
        condition: ['', []],
        damage: [0, []],
        cost_of_repair: [0, []]
      }),
      drainage: this.fb.group({
        description: ['', []],
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
        description: ['', []],
        piping_and_accessories: [0, []],
        cabling: [0, []],
        sources: ['', []],
        condition: ['', []],
        damage: [0, []],
        cost_of_repair: [0, []]
      }),
      water: this.fb.group({
        description: ['', []],
        piping_and_accessories: [0, []],
        cabling: [0, []],
        sources: ['', []],
        condition: ['', []],
        damage: [0, []],
        cost_of_repair: [0, []]
      }),
      //steps: this.fb.array([this.addSteps()]),
      steps:this.fb.group({

      }),
      gas_tanks: this.fb.array([this.addGasTanks()]),
      ramps: this.fb.array([this.addRamps()]),
      street_lights: this.fb.array([this.addStreetLights()]),
      waste_site: this.fb.array([this.addWasteSites()])
    })

  }

  addSteps(): null | FormGroup {
    return this.fb.group({
      description: ['', [Validators.required]],
      concrete_work: [0, [Validators.required]],
        width: [0, [Validators.required]],
        length: [0, [Validators.required]],
        quantity: [0, [Validators.required]],
        surface_dressing: [0, [Validators.required]],
        condition: ['', [Validators.required]],
        damage: [0, [Validators.required]],
      cost_of_repair: [0, [Validators.required]]
    })
  }

  addGasTanks(): FormGroup {
    return this.fb.group({
      description: ['', [Validators.required]],
      quantity: [0, [Validators.required]],
      condition: ['', [Validators.required]],
      damage: [0, [Validators.required]],
      cost_of_repair: [0, [Validators.required]]
    })
  }

  addRamps(): FormGroup {
    return this.fb.group({
      description: ['', [Validators.required]],
      width: [0, [Validators.required]],
      sloping_length: [0, [Validators.required]],
      concrete_work: [0, [Validators.required]],
      condition: ['', [Validators.required]],
      cost_of_repair: [0, [Validators.required]]
    })
  }

  addStreetLights(): FormGroup {
    return this.fb.group({
      description: ['', [Validators.required]],
      quantity: [0, [Validators.required]],
      height: [0, [Validators.required]],
      condition: ['', [Validators.required]],
      cost_of_repair: [0, [Validators.required]]
    })
  }

  addWasteSites(): FormGroup {
    return this.fb.group({
      description: ['', [Validators.required]],
      length: [0, [Validators.required]],
      width: ['', [Validators.required]],
      position: this.fb.group({
        longitude: [0, [Validators.required]],
        latitude: [0, [Validators.required]]
      }),
      cost_of_repair: [0, [Validators.required]]
    })
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

  submit() {
    console.log(this.siteForm.value)
  }

  resetForm() {
    
  }

}
