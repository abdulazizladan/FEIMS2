import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { EquipmentService } from "app/admin/services/equipment.service";
import { of } from "rxjs";
import { catchError, exhaustMap, map } from "rxjs/operators";
import { addHVEquipment, 
  addLVEquipmentFail, 
  addLVEquipmentSuccess,
  addHVEquipmentFail, 
  addHVEquipmentSuccess,  
  addLVEquipment, 
  loadLowValueEquipment, 
  loadLowValueEquipmentSuccess, 
  loadLowValueEquipmentFail, 
  loadHighValueEquipment, 
  loadHighValueEquipmentSuccess, 
  loadHighValueEquipmentFail } from "./equipment.actions";

@Injectable()
export class SiteEffect {

  /**
   * 
   */
  addHVEquipment$ = createEffect(() => this.actions$.pipe(
    ofType(addHVEquipment),
    exhaustMap(({equipment}) => this.equipment.addHighValueEquipment(equipment).pipe(
        map(equipment => addHVEquipmentSuccess({equipment})),
        catchError(error => of(addHVEquipmentFail({reason: error})))
    ))
  ));

  /**
   * 
   */
  addLVEquipment$ = createEffect(() => this.actions$.pipe(
    ofType(addLVEquipment),
    exhaustMap(({equipment}) => this.equipment.addLowValueEquipment(equipment).pipe(
        map(equipment => addLVEquipmentSuccess({equipment})),
        catchError(error => of(addLVEquipmentFail({reason: error})))
    ))
  ));

  /**
   * 
   */
  loadHighValueEquipment$ = createEffect(() => this.actions$.pipe(
    ofType(loadHighValueEquipment),
    exhaustMap(() => this.equipment.getAllHighValueEquipment().pipe(
      map(equipment => loadHighValueEquipmentSuccess({equipment})),
      catchError(error => of(loadHighValueEquipmentFail({reason: error})))
    ))
  ))

  /**
   * 
   */
  loadLowValueEquipment$ = createEffect(() => this.actions$.pipe(
    ofType(loadLowValueEquipment),
    exhaustMap(() => this.equipment.getAllLowValueEquipment().pipe(
      map(equipment => loadLowValueEquipmentSuccess({equipment})),
      catchError(error => of(loadLowValueEquipmentFail({reason: error})))
    ))
  ))

  /**
   * 
   */
  constructor(
    private actions$: Actions, 
    private equipment: EquipmentService
  ) {}
}