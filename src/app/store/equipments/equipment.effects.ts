import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { EquipmentService } from "app/admin/services/equipment.service";
import { of } from "rxjs";
import { catchError, exhaustMap, map } from "rxjs/operators";
import { addHVEquipment, addEquipmentFail, addEquipmentSuccess, addLVEquipment, loadEquipment, loadEquipmentSuccess, loadEquipmentFail, loadHighValueEquipment, loadHighValueEquipmentSuccess, loadHighValueEquipmentFail } from "./equipment.actions";

@Injectable()
export class SiteEffect {

  addHVEquipment$ = createEffect(() => this.actions$.pipe(
    ofType(addHVEquipment),
    exhaustMap(({equipment}) => this.equipment.addHighValueEquipment(equipment).pipe(
        map(equipment => addEquipmentSuccess({equipment})),
        catchError(error => of(addEquipmentFail({reason: error})))
    ))
  ));

  addLVEquipment$ = createEffect(() => this.actions$.pipe(
    ofType(addLVEquipment),
    exhaustMap(({equipment}) => this.equipment.addLowValueEquipment(equipment).pipe(
        map(equipment => addEquipmentSuccess({equipment})),
        catchError(error => of(addEquipmentFail({reason: error})))
    ))
  ));

  loadHighValueEquipment$ = createEffect(() => this.actions$.pipe(
    ofType(loadHighValueEquipment),
    exhaustMap(() => this.equipment.getAllHighValueEquipment().pipe(
      map(equipments => loadHighValueEquipmentSuccess({equipments})),
      catchError(error => of(loadHighValueEquipmentFail({reason: error})))
    ))
  ))

  /*loadEquipment$ = createEffect(() => this.actions$.pipe(
    ofType(loadEquipment),
    exhaustMap(() => this.equipment.getAllLowValueEquipment().pipe(
      map(equipments => loadEquipmentSuccess({equipments})),
      catchError(error => of(loadEquipmentFail({reason: error})))
    ))
  ))*/

  

  constructor(
    private actions$: Actions, 
    private equipment: EquipmentService
  ) {}
}