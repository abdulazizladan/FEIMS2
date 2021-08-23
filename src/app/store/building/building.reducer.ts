import { state } from "@angular/animations";
import { createReducer, on } from "@ngrx/store";
import { addBuilding, addBuildingFail, addBuildingSucess, loadBuildings, loadBuildingsFail, loadBuildingsSuccess } from "./building.actions";
import { initialBuildingState } from "./building.state";

export const buildingReducer = createReducer(
  initialBuildingState,
  on(addBuilding, (state, {building}) => ({...state, loading: true})),
  on(addBuildingSucess, (state, {building}) => ({...state, loading: false, buildings: [...state.buildings, building]})),
  on(addBuildingFail, (state, {reason}) => ({...state, loading: false})),
  on(loadBuildings, (state) => ({...state, loading: true})),
  on(loadBuildingsSuccess, (state, {buildings}) => ({...state, buildings: buildings})),
  on(loadBuildingsFail, (state, {reason}) => ({...state, loading: false}))
);