import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { BuildingService } from "app/admin/services/building.service";
import { of } from "rxjs";
import { catchError, exhaustMap, map } from "rxjs/operators";
import { addBuilding, addBuildingFail, addBuildingSucess, loadBuildings, 
  loadBuildingsFail, loadBuildingsSuccess } from "./building.actions";

@Injectable()
export class BuildingEffect {

  addSite$ = createEffect(() => this.actions$.pipe(
    ofType(addBuilding),
    exhaustMap(({building}) => this.buildingService.addBuilding(building).pipe(
      map(building => addBuildingSucess({building})),
      catchError(error => of(addBuildingFail({reason: error})))
    ))
  ));

  loadBuildings$ = createEffect(() => this.actions$.pipe(
    ofType(loadBuildings),
    exhaustMap(() => this.buildingService.getBuildings().pipe(
      map(buildings => loadBuildingsSuccess({buildings})),
      catchError(error => of(loadBuildingsFail({reason: error})))
    ))
  ));

  constructor(private actions$: Actions, private buildingService: BuildingService) {}
}