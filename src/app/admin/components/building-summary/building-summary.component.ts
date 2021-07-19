import { Component, OnInit } from '@angular/core';
import { BuildingService } from 'app/admin/services/building.service';
import { Building } from 'app/admin/models/building.model';
import { egretAnimations } from '../../../shared/animations/egret-animations';
import { Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { ThemeService } from '../../../shared/services/theme.service';
import * as tinyColor from 'tinycolor2';
import { Store } from '@ngrx/store';
import { BuildingState } from 'app/store/building/building.state';
import { selectBuidings } from 'app/store/building/building.selector';

@Component({
  selector: 'app-building-summary',
  templateUrl: './building-summary.component.html',
  styleUrls: ['./building-summary.component.scss'],
  animations: egretAnimations
})
export class BuildingSummaryComponent implements OnInit {

  id: number;
  public building: Observable<Building[]>;
  
  constructor( 
    private store: Store<BuildingState>,
    private buildingService: BuildingService, 
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.id = parseInt(this.route.snapshot.paramMap.get('id'));
    this.building = this.store.select(selectBuidings)
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
