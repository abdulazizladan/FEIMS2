import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Store } from '@ngrx/store';
import { SiteState } from 'app/store/site/site.state';
import { AddSiteComponent } from '../add-site/add-site.component';
import { loadSites } from 'app/store/site/site.actions';
import { selectSites } from 'app/store/site/site.selector';
import { Site } from 'app/admin/models/site.model';

@Component({
  selector: 'app-site',
  templateUrl: './sites-list.component.html',
  styleUrls: ['./sites-list.component.scss']
})
export class SitesListComponent implements OnInit {

  sites$ = this.store.select(selectSites)

  constructor( 
    private dialog: MatDialog,
    private store: Store<{site: SiteState}> ) { }

  ngOnInit(): void {
    this.store.dispatch(loadSites());
  }

  openAddSiteDialog(): void{
    const dialogRef = this.dialog.open(AddSiteComponent, {
      data: {},
      disableClose: true
    });
  }

}
