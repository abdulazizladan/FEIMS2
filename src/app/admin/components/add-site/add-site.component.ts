import { Component, OnInit } from '@angular/core';
import { SiteService } from '../../services/site.service'

@Component({
  selector: 'app-add-site',
  templateUrl: './add-site.component.html',
  styleUrls: ['./add-site.component.scss']
})
export class AddSiteComponent implements OnInit {

  constructor( private siteService: SiteService) { }

  ngOnInit(): void {
  }

  addSit() {

  }

  resetForm() {
    
  }

}
