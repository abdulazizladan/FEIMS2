import { Component, OnInit, Input, Output } from '@angular/core';
import { Building } from 'app/admin/models/building.model';

export interface building{
  id: number,
  name: string,
  image: string,
  type: string,
  description: string,
  repair_cost: number
}

@Component({
  selector: 'app-building',
  templateUrl: './building.component.html',
  styleUrls: ['./building.component.scss']
})
export class BuildingComponent implements OnInit {

  @Input()
  data : Building;

  constructor() { }

  ngOnInit(): void {
  }

  @Output()
  showSummary(id : string){
    console.log(id)
  }
}
