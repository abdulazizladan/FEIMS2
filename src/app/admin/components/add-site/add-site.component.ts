import { getTranslationDeclStmts } from '@angular/compiler/src/render3/view/template';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { Store } from '@ngrx/store';
import { Site } from 'app/admin/models/site.model';
import { SiteService } from 'app/admin/services/site.service';
import { addSite } from 'app/store/site/site.actions';
import { Subscription } from 'rxjs';
import { SiteState } from '../../../store/site/site.state';

@Component({
  selector: 'app-add-site',
  templateUrl: './add-site.component.html',
  styleUrls: ['./add-site.component.scss']
})
/** 
 * Component that adds new site. 
 * */
export class AddSiteComponent implements OnInit {

  //expansionPanelStep: number = 0;

  public states: any;

  submitted: boolean = false;
  error: boolean = false;
  private subscription: Subscription;

  public appearance="fill";

  public siteForm: FormGroup;//Site form
  public hasSteps: boolean;
  public hasGasTanks: boolean;
  public hasRamps: boolean;
  public hasStreetLights: boolean;
  public hasWasteSite: boolean;
  public hasOthers: boolean;

  constructor( 
    private siteService: SiteService, 
    private fb: FormBuilder, 
    private store: Store<{ site: SiteState }>, 
    private dialogRef: MatDialogRef<any>) { }

  /**
   * First lifecycle hook
   */
  ngOnInit(): void {
    this.initializeForm();
  }

  /**
   * OnDestroy lifecycle hook
   */
  ngOnDestroy() : void {
    //this.subscription.unsubscribe();
  }

  /**
   * POSTs request to store new site
   */
  submit() {
    const data = this.siteForm.value;
    this.submitted = true;
    this.store.dispatch(addSite({site: data}))
    setTimeout(
      () => {
        this.dialogRef.close()
      },
      5000
    )
  }

  /**
   * Initialize form controls
   */

  initializeForm():void {

    this.getStates();

    this.siteForm = this.fb.group({
      name: ['', [Validators.required]],
      code: ['', [Validators.required]],
      state: ['', [Validators.required]],
      lga: ['', [Validators.required]],
      street_address: ['', [Validators.required]],
      measurement: [0, [Validators.required]],
      level: [0, []],
      position: this.fb.group({
        longitude: [0, []],
        latitude: [0, []]
      }),
      map: ['', []],
      comment: ['', [Validators.required]],
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
        //sources: ['', []],
        sources: this.fb.array([this.fb.control('')]),
        condition: ['', []],
        damage: [0, []],
        cost_of_repair: [0, []]
      }),
      water: this.fb.group({
        //description: ['', []],
        piping_and_accessories: [0, []],
        cabling: [0, []],
        //sources: ['', []],
        sources: this.fb.array([this.fb.control('')]),
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

  get waterSources(): FormArray{
    return this.siteForm.get('water.sources') as FormArray;
  }

  get electricitySources(): FormArray{
    return this.siteForm.get('electricity.sources') as FormArray;
  }

  addElectricitySource(): void {
    this.electricitySources.push(this.fb.control(''))    
  }

  removeElectricitySource( index: number): void {
    this.electricitySources.removeAt(index)
  }

  addWaterSource(): void {
    this.waterSources.push(this.fb.control(''))
  }

  removeWaterSource( index: number ): void {
    this.waterSources.removeAt(index)
  }


  /**
   * 
   */
  stepsForm: FormGroup = this.fb.group({
    //description: ['', []],
    concrete_work: [0, [Validators.required]],
    width: [0, [Validators.required, Validators.min(1)]],
    length: [0, [Validators.required, Validators.min(1)]],
    quantity: [0, [Validators.required, Validators.min(1)]],
    surface_dressing: [0, []],
    condition: ['', [Validators.required]],
    damage: [0, []],
    cost_of_repair: [0, [Validators.required]]
  })

  /**
   * 
   */
  addSteps():  void{
    this.hasSteps = true;
    this.siteForm.addControl("steps", this.stepsForm)
  }

  /**
   * 
   */
  removeSteps(): void {
    this.hasSteps = false;
    this.siteForm.removeControl('steps');
  }

  /**
   * 
   */
  gasTanksForm: FormGroup = this.fb.group({
    //description: ['', [Validators.required]],
    quantity: [0, [Validators.required]],
    condition: ['', [Validators.required]],
    damage: [0, [Validators.required]],
    cost_of_repair: [0, [Validators.required]]
  })

  /**
   * 
   */
  addGasTanks(): void {
    this.hasGasTanks = true;
    this.siteForm.addControl('gas_tanks', this.gasTanksForm)
  }

  /**
   * 
   */
  removeGasTanks(): void {
    this.hasGasTanks = false;
    this.siteForm.removeControl('gas_tanks');
  }

  /**
   * 
   */
  rampsForm: FormGroup = this.fb.group({
    //description: ['', [Validators.required]],
    width: [0, [Validators.required]],
    sloping_length: [0, [Validators.required]],
    concrete_work: [0, [Validators.required]],
    condition: ['', [Validators.required]],
    cost_of_repair: [0, [Validators.required]]
  })

  /**
   * 
   */
  addRamps(): void {
    this.hasRamps = true;
    this.siteForm.addControl('ramps', this.rampsForm);
  }

  /**
   * 
   */
  removeRamps(): void {
    this.hasRamps = false;
    this.siteForm.removeControl('ramps');
  }

  /**
   * 
   */
  streetLights: FormGroup = this.fb.group({
    //description: ['', [Validators.required]],
    quantity: [0, [Validators.required]],
    height: [0, [Validators.required]],
    condition: ['', [Validators.required]],
    cost_of_repair: [0, [Validators.required]]
  })

  /**
   * 
   */
  addStreetLights(): void {
    this.hasStreetLights = true;
    this.siteForm.addControl('street_lights', this.streetLights);
  }

  /**
   * 
   */
  removeStreetLights(): void {
    this.hasStreetLights = false;
    this.siteForm.removeControl('street_lights');
  }

  wasteSite: FormGroup = this.fb.group({
    //description: ['', [Validators.required]],
    length: [0, [Validators.required]],
    width: ['', [Validators.required]],
    position: this.fb.group({
      longitude: [0, []],
      latitude: [0, []]
    }),
    cost_of_repair: [0, [Validators.required]]
  })

  /**
   * 
   */
  addWasteSite(): void {
    this.hasWasteSite = true;
    this.siteForm.addControl('waste_site', this.wasteSite);
  }

  /**
   * 
   */
  removeWasteSite(): void {
    this.hasWasteSite = false;
    this.siteForm.removeControl('waste_site');
  }

  /**
   * 
   */
  getStates() {
    this.states = [
      {
        "name": "abia",
        "lgas": [
          {
            "name": ""
          },
        ]
      },
      {
        "name": "adamawa",
        "lgas": [
          {
            "name": ""
          },
        ]
      },
      {
        "name": "akwa-ibom",
        "lgas": [
          {
            "name": ""
          },
        ]
      },
      {
        "name": "anambra",
        "lgas": [
          {
            "name": ""
          },
        ]
      },
      {
        "name": "bauchi",
        "lgas": [
          {
            "name": ""
          },
        ]
      },
      {
        "name": "borno",
        "lgas": [
          {
            "name": ""
          },
        ]
      },
      {
        "name": "cross-river",
        "lgas": [
          {
            "name": ""
          },
        ]
      },
      {
        "name": "delta",
        "lgas": [
          {
            "name": ""
          },
        ]
      },
      {
        "name": "edo",
        "lgas": [
          {
            "name": ""
          },
        ]
      },
      {
        "name": "enugu",
        "lgas": [
          {
            "name": ""
          },
        ]
      },
      {
        "name": "gombe",
        "lgas": [
          {
            "name": ""
          },
        ]
      },
      {
        "name": "imo",
        "lgas": [
          {
            "name": ""
          },
        ]
      },
      {
        "name": "jigawa",
        "lgas": [
          {
            "name": ""
          },
        ]
      },
      {
        "name": "kaduna",
        "lgas": [
          {
            "name": "zaria"
          },
          {
            "name": "igabi"
          },
  
        ]
      },
      {
        "name": "kano",
        "lgas": [
          {
            "name": ""
          },
        ]
      },
      {
        "name": "katsina",
        "lgas": [
          {
            "name": ""
          },
        ]
      }
    ]
  }

  /**
   * 
   */
  resetForm() {
    
  }

}

