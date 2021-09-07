import { createReducer, on } from "@ngrx/store";
import { 
  addLVEquipmentSuccess, 
  addHVEquipment, 
  addLVEquipment, 
  addHVEquipmentFail,
  addHVEquipmentSuccess,
  addLVEquipmentFail,
  loadHighValueEquipment, 
  loadHighValueEquipmentFail, 
  loadHighValueEquipmentSuccess, 
  loadLowValueEquipment, 
  loadLowValueEquipmentFail, 
  loadLowValueEquipmentSuccess 
} from "./equipment.actions";
import { initialEquipmentState } from "./equipment.state";

export const equipmentReducer = createReducer(
  initialEquipmentState,
  on(addHVEquipment, (state, {equipment}) => ({...state, loading: true})),
  on(addLVEquipment, (state, {equipment}) => ({...state, loading: true})),
  on(addLVEquipmentSuccess, (state, {equipment}) => ({...state, loading: false, lowValueEquipment: [...state.lowValueEquipment, equipment]})),
  on(addHVEquipmentFail, (state, {reason}) => ({...state, loading: false, errors: [reason, ...state.errors]})),
  on(addHVEquipmentSuccess, (state, {equipment}) => ({...state, loading: false, highValueEquipment: [...state.highValueEquipment, equipment]})),
  on(addLVEquipmentFail, (state, {reason}) => ({...state, loading: false, errors: [reason, ...state.errors]})),
  
  on(loadHighValueEquipment, (state) => ({...state, loading: true})),
  on(loadHighValueEquipmentSuccess, (state, {equipment}) => ({...state, highValueEquipment: equipment})),
  on(loadHighValueEquipmentFail, (state, {reason}) => ({...state, loading: false})),
  on(loadLowValueEquipment, (state) => ({...state, loading: true})),
  on(loadLowValueEquipmentSuccess, (state, {equipment}) => ({...state, lowValueEquipment: equipment})),
  on(loadLowValueEquipmentFail, (state, {reason}) => ({...state, loading: false})),
);