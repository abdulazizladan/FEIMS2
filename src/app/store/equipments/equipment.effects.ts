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
export class EquipmentEffect {

  addHVEquipment$ = createEffect(() => this.actions$.pipe(
    ofType(addHVEquipment),
    exhaustMap(({equipment}) => this.equipmentService.addHighValueEquipment(equipment).pipe(
        map(equipment => addHVEquipmentSuccess({equipment})),
        catchError(error => of(addHVEquipmentFail({reason: error})))
    ))
  ));

  addLVEquipment$ = createEffect(() => this.actions$.pipe(
    ofType(addLVEquipment),
    exhaustMap(({equipment}) => this.equipmentService.addLowValueEquipment(equipment).pipe(
        map(equipment => addLVEquipmentSuccess({equipment})),
        catchError(error => of(addLVEquipmentFail({reason: error})))
    ))
  ));

  loadHighValueEquipment$ = createEffect(() => this.actions$.pipe(
    ofType(loadHighValueEquipment),
    exhaustMap(() => this.equipmentService.getAllHighValueEquipment().pipe(
      map(equipment => loadHighValueEquipmentSuccess({equipment})),
      catchError(error => of(loadHighValueEquipmentFail({reason: error})))
    ))
  ));

  loadLowValueEquipment$ = createEffect(() => this.actions$.pipe(
    ofType(loadLowValueEquipment),
    exhaustMap(() => this.equipmentService.getAllLowValueEquipment().pipe(
      map(equipment => loadLowValueEquipmentSuccess({equipment})),
      catchError(error => of(loadLowValueEquipmentFail({reason: error})))
    ))
  ));

  constructor(private actions$: Actions, private equipmentService: EquipmentService) { }
}