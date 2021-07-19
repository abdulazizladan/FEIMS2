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
import { selectBuidings, selectBuilding } from 'app/store/building/building.selector';

@Component({
  selector: 'app-building-summary',
  templateUrl: './building-summary.component.html',
  styleUrls: ['./building-summary.component.scss'],
  animations: egretAnimations
})
export class BuildingSummaryComponent implements OnInit {

  id: string;
  public building: Observable<Building>;
  
  constructor( 
    private store: Store<BuildingState>,
    private buildingService: BuildingService, 
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.id = (this.route.snapshot.paramMap.get('id'));
    this.building = this.store.select(selectBuilding, this.id)
    //this.getBuildings(this.id);
    //console.log(this.building)
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
