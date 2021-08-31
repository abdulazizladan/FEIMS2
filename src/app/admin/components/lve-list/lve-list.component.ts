import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { Store } from '@ngrx/store';
import { EquipmentState } from 'app/store/equipments/equipment.state';
import { AddLveComponent } from '../add-lve/add-lve.component';
import { loadHighValueEquipment, loadLowValueEquipment } from 'app/store/equipments/equipment.actions';
import { selectEquipmentState } from 'app/store/equipments/equipment.selector';
import { LVE } from 'app/admin/models/lve.model';
import { EquipmentService } from 'app/admin/services/equipment.service';


@Component({
  selector: 'app-lve-list',
  templateUrl: './lve-list.component.html',
  styleUrls: ['./lve-list.component.scss']
})
export class LveListComponent implements OnInit {

  equipment$ = this.store.select(selectEquipmentState)
  lves: LVE[]

  constructor(
    private dialog: MatDialog,
    private equipmentService: EquipmentService,
    private store: Store<{equipment: EquipmentState}>
  ) { }

  ngOnInit(): void {
    this.store.dispatch(loadLowValueEquipment())
  }

  openAddLVEDialog() {
    const dialogRef = this.dialog.open(AddLveComponent, {
      data: {},
      disableClose: true
    });
  }

}
