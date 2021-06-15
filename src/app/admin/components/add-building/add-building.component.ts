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

 
  resetForm(){

  }

  constructor( private buildingService: BuildingService, private fb: FormBuilder) { 
    
  }

  ngOnInit(): void{
    
  }

  ngOnDestroy(){

  }

  submit (){
  }

}