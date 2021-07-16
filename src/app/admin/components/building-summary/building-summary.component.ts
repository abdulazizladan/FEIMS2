import { Component, OnInit } from '@angular/core';
import { BuildingService } from 'app/admin/services/building.service';
import { building } from 'app/admin/models/building.model';
import { egretAnimations } from '../../../shared/animations/egret-animations';
import { ActivatedRoute } from '@angular/router';
import { ThemeService } from '../../../shared/services/theme.service';
import * as tinyColor from 'tinycolor2';

@Component({
  selector: 'app-building-summary',
  templateUrl: './building-summary.component.html',
  styleUrls: ['./building-summary.component.scss'],
  animations: egretAnimations
})
export class BuildingSummaryComponent implements OnInit {

  id: number;
  public building: building;
  constructor( private buildingService: BuildingService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.id = parseInt(this.route.snapshot.paramMap.get('id'));
    this.getBuildings(this.id);
  }

  getBuildings( id: number) {
    this.buildingService.getSingleBuilding(id).subscribe(
      result => {

      },
      error => {
         
      }
    )
  }

}
