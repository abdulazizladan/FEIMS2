import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { Store } from '@ngrx/store';
import { EquipmentState } from 'app/store/equipments/equipment.state';
import { AddHveComponent } from '../add-hve/add-hve.component';
import { loadHighValueEquipment } from 'app/store/equipments/equipment.actions';
import { selectEquipmentState } from 'app/store/equipments/equipment.selector';
import { HVE } from 'app/admin/models/hve.model';
import { EquipmentService } from 'app/admin/services/equipment.service';


@Component({
  selector: 'app-hve-list',
  templateUrl: './hve-list.component.html',
  styleUrls: ['./hve-list.component.scss']
})
export class HveListComponent implements OnInit {

  equipment$ = this.store.select(selectEquipmentState)

  hves: HVE[]

  constructor( 
    private dialog: MatDialog,
    private equipmentService: EquipmentService,
    private store: Store<{equipment: EquipmentState}>
  ) { }

  ngOnInit(): void {
    this.store.dispatch(loadHighValueEquipment())
  }

  openAddHVEDialog() {
    const dialogRef = this.dialog.open(AddHveComponent, {
      data: {},
      disableClose: true
    });
  }

}
