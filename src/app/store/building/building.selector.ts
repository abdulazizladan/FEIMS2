import { createFeatureSelector, createSelector } from "@ngrx/store";
import { BuildingState } from "./building.state";


export const selectBuildingState = createFeatureSelector<BuildingState>('building');

export const selectBuidings = createSelector(
  selectBuildingState,
  (state: BuildingState) => state.buildings
);

export const selectLoading = createSelector(
  selectBuildingState,
  (state: BuildingState) => state.loading
)