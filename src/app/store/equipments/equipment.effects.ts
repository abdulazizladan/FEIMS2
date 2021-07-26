import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { EquipmentService } from "app/admin/services/equipment.service";
import { of } from "rxjs";
import { catchError, exhaustMap, map } from "rxjs/operators";
import { addHVEquipment, addEquipmentFail, addEquipmentSuccess, addLVEquipment } from "./equipment.actions";

@Injectable()
export class SiteEffect {

  addHVEquipment$ = createEffect(() => this.actions$.pipe(
    ofType(addHVEquipment),
    exhaustMap(({equipment}) => this.equipment.addHighValueEquipment(equipment).pipe(
        map(site => addEquipmentSuccess({equipment})),
        catchError(error => of(addEquipmentFail({reason: error})))
    ))
  ));

  addLVEquipment$ = createEffect(() => this.actions$.pipe(
    ofType(addLVEquipment),
    exhaustMap(({equipment}) => this.equipment.addLowValueEquipment(equipment).pipe(
        map(site => addEquipmentSuccess({equipment})),
        catchError(error => of(addEquipmentFail({reason: error})))
    ))
  ));

  constructor(private actions$: Actions, private equipment: EquipmentService) {}
}