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
      name: ['', [Validators.required]],
      code: ['', [Validators.required]],
      year_built: [0, [Validators.required]],
      position: this.fb.group({
        longitude: [0, []],
        latitude: [0, []]
      }),
      purpose: ['', [Validators.required]],
      comment: ['', [Validators.required]],
    })
  }

  ngOnDestroy(){

  }

  submit (){
  }

}