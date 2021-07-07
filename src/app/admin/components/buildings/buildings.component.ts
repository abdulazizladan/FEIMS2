import { Component, OnInit, OnDestroy } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { AddBuildingComponent } from '../add-building/add-building.component';
import { BuildingService } from 'app/admin/services/building.service';
import { Subscription } from 'rxjs';

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

  subscription: Subscription;

  A : building[]= [
    {
      "name" : "Mech001",
      "type" : "Departmental building",
      "image" : "./assets/img/03.jpg",
      "description" : "Mechanical Engineering's departmental complex.",
      "repair_cost" : 5000000,
      "id" : 1
    }
  ];

  buildings : building[];

  constructor( public dialog: MatDialog, private buildingService: BuildingService ) { }

  ngOnInit(): void {
    
  }
  ngOnDestroy() {
    //this.subscription.unsubscribe();
  }

  openAddDialog(): void{
    const dialogRef = this.dialog.open(AddBuildingComponent, {
      data: {},
      disableClose: true
    });
  }

  getBuildings( ): void{
    this.subscription = this.buildingService.getBuildings().subscribe(
      result => {
        this.buildings = result;
      }, 
      error => {

      }
    )
  }

}
