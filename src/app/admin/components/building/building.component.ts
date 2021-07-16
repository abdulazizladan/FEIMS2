import { Component, OnInit, Input, Output } from '@angular/core';

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
  data : building;

  constructor() { }

  ngOnInit(): void {
  }

  @Output()
  showSummary(id : number){
    console.log(id)
  }
}
