import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { AddHveComponent } from '../add-hve/add-hve.component';
import { AddLveComponent } from '../add-lve/add-lve.component';

@Component({
  selector: 'app-equipment-list',
  templateUrl: './equipment-list.component.html',
  styleUrls: ['./equipment-list.component.scss']
})
export class EquipmentListComponent implements OnInit {

  constructor( private dialog: MatDialog) { }

  ngOnInit(): void {
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

}
