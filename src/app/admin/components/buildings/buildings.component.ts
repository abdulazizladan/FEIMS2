import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { Store } from '@ngrx/store';
import { BuildingState } from 'app/store/building/building.state';
import { AddBuildingComponent } from '../add-building/add-building.component';

export interface building{
  id: number,
  name: string,
  image: string,
  type: string,
  description: string,
  repair_cost: number
}

@Component({
  selector: 'app-buildings',
  templateUrl: './buildings.component.html',
  styleUrls: ['./buildings.component.scss']
})
export class BuildingsComponent implements OnInit {

  A : building[]= [
    {
      "name" : "Mech001",
      "type" : "Departmental building",
      "image" : "./assets/img/03.jpg",
      "description" : "Mechanical Engineering's departmental complex.",
      "repair_cost" : 5000000,
      "id" : 1
    },
    {
      "name" : "LAB 001",
      "type" : "Laboratory",
      "image" : "./assets/img/02.jpg",
      "description" : "Materials laboratory",
      "repair_cost" : 5000,
      "id" : 2
    }
    ,{
      "name" : "LAB01",
      "type" : "Laboratory",
      "image" : "./assets/img/01.jpg",
      "description" : "string",
      "repair_cost" : 5000,
      "id" : 3
    },
    {
      "name" : "LAB01",
      "type" : "Laboratory",
      "image" : "./assets/img/04.png",
      "description" : "string",
      "repair_cost" : 5000,
      "id" : 4
    },
    {
    "name" : "LAB01",
    "type" : "Laboratory",
    "image" : "./assets/img/01.jpg",
    "description" : "string",
    "repair_cost" : 5000,
    "id" : 5
    },
    {
      "name" : "LAB01",
      "type" : "Laboratory",
      "image" : "./assets/img/01.jpg",
      "description" : "string",
      "repair_cost" : 5000,
      "id" : 6
    }
  ];

  buildings : building[];

  constructor(public dialog: MatDialog, private store: Store<{building: BuildingState}>) { }

  ngOnInit(): void {
  }

  openAddDialog(): void{
    const dialogRef = this.dialog.open(AddBuildingComponent, {
      width: '90%',
      height: '90%',
      data: {},
      disableClose: true
    });
  }

}
