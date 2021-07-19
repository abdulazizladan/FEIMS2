import { createFeatureSelector, createSelector } from "@ngrx/store";
import { Building } from "app/admin/models/building.model";
import { BuildingState } from "./building.state";


export const selectBuildingState = createFeatureSelector<BuildingState>('building');

export const selectBuidings = createSelector(
  selectBuildingState,
  (state: BuildingState) => state.buildings
);

export const selectBuilding =  createSelector(
  selectBuidings,
  (buidlings: Building[], id: string) => buidlings.find(buidling => buidling._id === id)
);

export const selectLoading = createSelector(
  selectBuildingState,
  (state: BuildingState) => state.loading
)