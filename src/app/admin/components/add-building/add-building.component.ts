import { Component, OnInit, OnDestroy } from '@angular/core';
import { BuildingService } from '../../services/building.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { building } from '../../models/building.model';

@Component({
  selector: 'app-add-building',
  templateUrl: './add-building.component.html',
  styleUrls: ['./add-building.component.scss']
})
export class AddBuildingComponent implements OnInit {

  public appearance: string = "fill";

  public buildingForm: FormGroup;
 
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
      })
    })
  }

  ngOnDestroy(){

  }

  submit (){
    this.buildingService.addBuilding('').subscribe()
  }

}