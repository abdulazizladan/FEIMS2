import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { Store } from '@ngrx/store';
import { EquipmentState } from 'app/store/equipments/equipment.state';
import { AddHveComponent } from '../add-hve/add-hve.component';
import { AddLveComponent } from '../add-lve/add-lve.component';
import { loadEquipments } from 'app/store/equipments/equipment.actions';
import { selectEquipmentState } from 'app/store/equipments/equipment.selector';
import { HVE } from 'app/admin/models/hve.model';
import { LVE } from 'app/admin/models/lve.model';
import { EquipmentService } from 'app/admin/services/equipment.service';

@Component({
  selector: 'app-equipment-list',
  templateUrl: './equipment-list.component.html',
  styleUrls: ['./equipment-list.component.scss']
})
export class EquipmentListComponent implements OnInit {

  equipment$ = this.store.select(selectEquipmentState)

  hves: HVE[]
  lves: LVE[]

  constructor( 
    private dialog: MatDialog,
    private equipmentService: EquipmentService,
    private store: Store<{equipment: EquipmentState}>) { }

  ngOnInit(): void {
    this.store.dispatch(loadEquipments())
    this.getEquipments() //remove after presentation
  }

  openAddLVEDialog() {
    const dialogRef = this.dialog.open(AddLveComponent, {
      data: {},
      disableClose: true
    });
  }

  openAddHVEDialog() {
    const dialogRef = this.dialog.open(AddHveComponent, {
      data: {},
      disableClose: true
    });
  }

  //temporary fix
  getEquipments() {
    this.equipmentService.getAllHighValueEquipment().subscribe(
      res => {
        this.hves = res
      },err => {
        console.log(err)
      }
    )

    this.equipmentService.getAllLowValueEquipment().subscribe(
      res => {
        this.lves = res
      },err => {
        console.log(err)
      }
    )
    
  }

}
