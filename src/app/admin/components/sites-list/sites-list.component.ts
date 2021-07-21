import { Component, OnInit } from '@angular/core';
import { SiteService } from 'app/admin/services/site.service';
import { Site } from 'app/admin/models/site.model';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-sites-list',
  templateUrl: './sites-list.component.html',
  styleUrls: ['./sites-list.component.scss']
})
export class SitesListComponent implements OnInit {

  private sites: Observable<Site[]>;
  
  constructor(
    private siteService: SiteService
  ) { }

  ngOnInit(): void {
  }

}
