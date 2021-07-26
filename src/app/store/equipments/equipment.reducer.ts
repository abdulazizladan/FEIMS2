import { createReducer, on } from "@ngrx/store";
import { addEquipmentFail, addEquipmentSuccess, addHVEquipment, addLVEquipment, loadEquipmentsFail, loadEquipmentsSuccess } from "./equipment.actions";
import { initialSiteState } from "./equipment.state";

export const equipmentReducer = createReducer(
  initialSiteState,
  on(addHVEquipment, (state, {equipment}) => ({...state, loading: true})),
  on(addLVEquipment, (state, {equipment}) => ({...state, loading: true})),
  on(addEquipmentSuccess, (state, {equipment}) => ({...state, loading: false, sites: [...state.equipments, equipment]})),
  on(addEquipmentFail, (state, {reason}) => ({...state, loading: false, errors: [reason, ...state.errors]})),
  on(loadEquipmentsSuccess, (state, {equipments}) => ({...state, sites: equipments})),
  on(loadEquipmentsFail, (state, {reason}) => ({...state, loading: false}))
);