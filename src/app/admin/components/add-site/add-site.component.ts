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
          longitude: [0, [Validators.required]],
          latitude: [0, [Validators.required]]
        }),
        comment: ['', [Validators.required]]
      }),
      gate: this.fb.group({
        description: ['', [Validators.required]],
        size: [0, [Validators.required]],
        thickness: [0, [Validators.required]],
        condition: ['', [Validators.required]],
        damage: [0, [Validators.required]],
        cost_of_repair: [0, [Validators.required]],
      }),
      fence: this.fb.group({

      }),
      roads: this.fb.group({

      }),
      paths: this.fb.group({

      }),
      driveway: this.fb.group({

      }),
      drainage: this.fb.group({

      }),
      electricity: this.fb.group({

      }),
      water: this.fb.group({

      }),
      steps: this.fb.array([this.fb.control('')]),
      gas_tanks: this.fb.array([this.fb.control('')]),
      ramps: this.fb.array([this.fb.control('')]),
      street_lights: this.fb.array([this.fb.control('')]),
      waste_site: this.fb.array([this.fb.control('')])
    })

  }

  addSteps():void {
    this.steps.push(this.fb.control(''))
  }

  addGasTanks():void {
    
  }

  addRamps() {

  }

  addStreetLamps() {

  }

  addWasteSites() {

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
    console.log(this.siteForm)
  }

  resetForm() {
    
  }

}
