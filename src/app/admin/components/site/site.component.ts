import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { AddSiteComponent } from '../add-site/add-site.component';

@Component({
  selector: 'app-site',
  templateUrl: './site.component.html',
  styleUrls: ['./site.component.scss']
})
export class SiteComponent implements OnInit {

  constructor( private dialog: MatDialog ) { }

  ngOnInit(): void {
  }

  openAddSiteDialog(): void{
    const dialogRef = this.dialog.open(AddSiteComponent, {
      //width: '90%',
      //minHeight: '650px',
      data: {},
      disableClose: true
    });
  }

}
