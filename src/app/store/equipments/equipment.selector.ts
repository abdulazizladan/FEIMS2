import { createFeatureSelector, createSelector } from "@ngrx/store";
import { EquipmentState } from "./equipment.state";


export const selectEquipmentState = createFeatureSelector<EquipmentState>('equipment');

export const selectHighValueEquipment = createSelector(
  selectEquipmentState,
  (state: EquipmentState) => state.highValueEquipment
);

export const selectLowValueEquipment = createSelector(
  selectEquipmentState,
  (state: EquipmentState) => state.lowValueEquipment
);

export const selectLoading = createSelector(
  selectEquipmentState,
  (state: EquipmentState) => state.loading
);