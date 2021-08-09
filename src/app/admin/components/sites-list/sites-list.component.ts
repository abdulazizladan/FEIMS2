import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { AddSiteComponent } from '../add-site/add-site.component';

@Component({
  selector: 'app-site',
  templateUrl: './sites-list.component.html',
  styleUrls: ['./sites-list.component.scss']
})
export class SitesListComponent implements OnInit {

  constructor( private dialog: MatDialog ) { }

  ngOnInit(): void {
  }

  openAddSiteDialog(): void{
    const dialogRef = this.dialog.open(AddSiteComponent, {
      //width: '800px%',
      //height: '90%',
      data: {},
      disableClose: true
    });
  }

}
