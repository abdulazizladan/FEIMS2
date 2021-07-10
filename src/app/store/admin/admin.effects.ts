import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { SiteService } from "app/admin/services/site.service";
import { BuildingService } from "app/admin/services/building.service";
import { Observable, of } from "rxjs";
import { catchError, exhaustMap, mergeMap, map } from "rxjs/operators";
import { loadBuildings, loadBuildingsSuccess, loadSitesFail, loadSites, loadSitesSuccess, addSite, addSiteFail, addSiteSuccess, addBuilding, addBuildingSuccess, addBuildingFail, loadBuildingsFail } from "./admin.actions";

@Injectable()
export class AdminEffect {
  
  //loadBuildings$ = createEffect(() => this.actions$.pipe(
  //  ofType(loadBuildings),    
    //mergeMap(() => this.buildingService$.getBuildings().pipe(

    //))
    //mergeMap(() => this.buildingService.getBuildings().pipe(
    //  map(buildings => ({addBuildingSuccess, payload: buildings})),
    //  catchError(error => of(loadBuildingsFail({ reason: error})))
    //))
  //));

  /**
   * Load buildings
   */
  loadBuildings$ = createEffect(() => {
    return this.actions$
      .pipe(
        ofType(loadBuildings),
        mergeMap(() => this.buildingService$.getBuildings()
        .pipe(
          map(buildings => loadBuildingsSuccess()),
          catchError(error => of(loadBuildingsFail(error)))
        )
      )
    )
  });

  /**
   * Load sites
   */
  loadSites$ = createEffect(() => {
    return this.actions$
      .pipe(
        ofType(loadSites),
        mergeMap(() => this.siteService$.getSites()
        .pipe(
          map(buildings => loadSitesSuccess()),
          catchError(error => of(loadSitesFail(error)))
        )
      )
    )
  });

  /**
   * Add site
   */
  addSite$ = createEffect(() => this.actions$.pipe(
    ofType(addSite),
    exhaustMap(({site}) => this.siteService$.addSite(site).pipe(
        map(site => addSiteSuccess({site})),
        catchError(error => of(addSiteFail({reason: error})))
    ))
  ));

  /**
   * Add building
   */
  addBuilding$ = createEffect(() => this.actions$.pipe(
    ofType(addBuilding),
    exhaustMap(({building}) => this.buildingService$.addBuilding(building).pipe(
      map(building => addBuildingSuccess({building})),
      catchError(error => of(addBuildingFail({reason: error})))
    ))
  ));

  constructor(
    private actions$: Actions, 
    private siteService$: SiteService, 
    private buildingService$: BuildingService
  ) {}
}
