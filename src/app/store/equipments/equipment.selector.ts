import { createFeatureSelector, createSelector } from "@ngrx/store";
import { EquipmentState } from "./equipment.state";


export const selectEquipmentState = createFeatureSelector<EquipmentState>('equipment');

export const selectSites = createSelector(
  selectEquipmentState,
  (state: EquipmentState) => state.equipments
);

export const selectLoading = createSelector(
  selectEquipmentState,
  (state: EquipmentState) => state.loading
);