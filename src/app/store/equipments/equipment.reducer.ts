import { createReducer, on } from "@ngrx/store";
import { 
  //addEquipmentFail, 
  addLVEquipmentSuccess, 
  addHVEquipment, 
  addLVEquipment, 
  addHVEquipmentFail,
  addHVEquipmentSuccess,
  addLVEquipmentFail,
  loadEquipmentFail, 
  loadEquipmentSuccess, 
  loadHighValueEquipment, 
  loadHighValueEquipmentFail, 
  loadHighValueEquipmentSuccess, 
  loadLowValueEquipment, 
  loadLowValueEquipmentFail, 
  loadLowValueEquipmentSuccess 
} from "./equipment.actions";
import { initialSiteState } from "./equipment.state";

export const equipmentReducer = createReducer(
  initialSiteState,
  on(addHVEquipment, (state, {equipment}) => ({...state, loading: true})),
  on(addLVEquipment, (state, {equipment}) => ({...state, loading: true})),
  on(addLVEquipmentSuccess, (state, {equipment}) => ({...state, loading: false, sites: [...state.lowValueEquipment, equipment]})),
  on(addHVEquipmentFail, (state, {reason}) => ({...state, loading: false, errors: [reason, ...state.errors]})),
  on(addHVEquipmentSuccess, (state, {equipment}) => ({...state, loading: false, sites: [...state.lowValueEquipment, equipment]})),
  on(addLVEquipmentFail, (state, {reason}) => ({...state, loading: false, errors: [reason, ...state.errors]})),
  
  on(loadEquipmentSuccess, (state, {equipments}) => ({...state, sites: equipments})),
  on(loadEquipmentFail, (state, {reason}) => ({...state, loading: false})),
  on(loadHighValueEquipment, (state) => ({...state, loading: true})),
  on(loadHighValueEquipmentSuccess, (state, {equipments}) => ({...state, sites: equipments})),
  on(loadHighValueEquipmentFail, (state, {reason}) => ({...state, loading: false})),
  on(loadLowValueEquipment, (state) => ({...state, loading: true})),
  on(loadLowValueEquipmentSuccess, (state, {equipments}) => ({...state, sites: equipments})),
  on(loadLowValueEquipmentFail, (state, {reason}) => ({...state, loading: false})),
);