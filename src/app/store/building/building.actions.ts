import { createAction, props } from "@ngrx/store";
import { Building } from "../../admin/models/building.model";


export enum BuildingActions {
  ADD_BUILDING = '[BUILDING] Add building',
  ADD_BUILDING_SUCCESS = '[BUILDING] Add building success',
  ADD_BUILDING_FAIL = '[BUDLING] Add building fail',
  LOAD_BUILDINGS = '[BUILDING] Load buildings',
  LOAD_BUILDINGs_SUCCESS = '[BUILDING] Load building success',
  LOAD_BUILDINGS_FAIL = '[BUILDING] Load building fail'
}

export const addBuilding = createAction(
  BuildingActions.ADD_BUILDING,
  props<{building: Building}>()
);

export const addBuildingSucess = createAction(
  BuildingActions.ADD_BUILDING_SUCCESS,
  props<{building: Building}>()
);

export const addBuildingFail = createAction(
  BuildingActions.ADD_BUILDING_FAIL,
  props<{reason: string}>()
);

export const loadBuildings = createAction(
  BuildingActions.LOAD_BUILDINGS
);

export const loadBuildingsSuccess = createAction(
  BuildingActions.LOAD_BUILDINGs_SUCCESS,
  props<{buildings: Building[]}>()
);

export const loadBuildingsFail = createAction(
  BuildingActions.LOAD_BUILDINGS_FAIL,
  props<{reason: string}>()
);