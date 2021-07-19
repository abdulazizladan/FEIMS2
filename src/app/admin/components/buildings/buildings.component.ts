import { Component, OnInit, OnDestroy } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Store } from '@ngrx/store';
import { BuildingState } from 'app/store/building/building.state';
import { AddBuildingComponent } from '../add-building/add-building.component';
import { loadBuildings } from 'app/store/building/building.actions';
import { selectBuidings } from 'app/store/building/building.selector';

@Component({
  selector: 'app-buildings',
  templateUrl: './buildings.component.html',
  styleUrls: ['./buildings.component.scss']
})
export class BuildingsComponent implements OnInit {

  buildings$ = this.store.select(selectBuidings);

  constructor(public dialog: MatDialog, private store: Store<{building: BuildingState}>) { }

  ngOnInit(): void {
    this.store.dispatch(loadBuildings());
  }

  openAddDialog(): void{
    const dialogRef = this.dialog.open(AddBuildingComponent, {
      data: {},
      disableClose: true
    });
  }
}
