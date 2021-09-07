import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Store } from '@ngrx/store';
import { EquipmentState } from 'app/store/equipments/equipment.state';
import { AddHveComponent } from '../add-hve/add-hve.component';
import { loadHighValueEquipment } from 'app/store/equipments/equipment.actions';
import { selectHighValueEquipment } from 'app/store/equipments/equipment.selector';
import { HVE } from 'app/admin/models/hve.model';


@Component({
  selector: 'app-hve-list',
  templateUrl: './hve-list.component.html',
  styleUrls: ['./hve-list.component.scss']
})
export class HveListComponent implements OnInit {

  equipment$ = this.store.select(selectHighValueEquipment)

  /**
   * constructor
   * inject MatDialog, Store<{Equipment}>
   */
  constructor( 
    private dialog: MatDialog,
    private store: Store<{equipment: EquipmentState}>
  ) { }

  /**
   * first lifecycle hook
   */
  ngOnInit(): void {
    this.store.dispatch(loadHighValueEquipment())
  }

  /**
   * open addHVEDialog
   */
  openAddHVEDialog() {
    const dialogRef = this.dialog.open(AddHveComponent, {
      data: {},
      disableClose: true
    });
  }

}
