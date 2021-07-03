import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { SiteService } from "app/admin/services/site.service";
import { BuildingService } from "app/admin/services/building.service";
import { of } from "rxjs";
import { catchError, exhaustMap, map } from "rxjs/operators";
import { addSite, addSiteFail, addSiteSuccess, addBuilding, addBuildingSuccess, addBuildingFail } from "./admin.actions";

@Injectable()
export class AdminEffect {

  addSite$ = createEffect(() => this.actions$.pipe(
    ofType(addSite),
    exhaustMap(({site}) => this.siteService.addSite(site).pipe(
        map(site => addSiteSuccess({site})),
        catchError(error => of(addSiteFail({reason: error})))
    ))
  ));

  addBuilding$ = createEffect(() => this.actions$.pipe(
    ofType(addBuilding),
    exhaustMap(({building}) => this.buildingService.addBuilding(building).pipe(
      map(building => addBuildingSuccess({building})),
      catchError(error => of(addBuildingFail({reason: error})))
    ))
  ));

  constructor(
    private actions$: Actions, 
    private siteService: SiteService, 
    private buildingService: BuildingService
  ) {}
}
