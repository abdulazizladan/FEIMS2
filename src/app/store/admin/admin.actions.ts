import { createAction, props } from '@ngrx/store';
import { Site } from 'app/admin/models/site.model';
import { building } from 'app/admin/models/building.model';

export enum AdminActions {
  	ADD_SITE = '[ADMIN] Add site',
 	ADD_SITE_SUCCESS = '[ADMIN] Add site success',
	ADD_SITE_FAIL = '[ADMIN] Add site fail',
	LOAD_SITES = '[ADMIN] Load sites',
	LOAD_SITES_SUCCESS = '[ADMIN] Load sites success',
	LOAD_SITES_FAIL = '[ADMIN] Load sites fail',
	CLEAR_ERRORS = '[ADMIN] Clear errors',
	ADD_BUILDING = '[ADMIN] Add building', 
	ADD_BUILDING_SUCCESS = '[ADMIN] Add building success',
	ADD_BUILDING_FAIL = '[ADMIN] Add building fail',
	LOAD_BUILDINGS = '[ADMIN] Load buildings',
	LOAD_BUILDINGS_SUCCESS = '[ADMIN] Load buildings success',
	LOAD_BUILDINGS_FAIL = '[ADMIN] Load building fail'
}

export const addSite = createAction(
	AdminActions.ADD_SITE,
	props<{site: Site}>()
);

export const addSiteSuccess = createAction(
  AdminActions.ADD_SITE_SUCCESS,
  props<{site: Site}>()
);

export const addSiteFail = createAction(
	AdminActions.ADD_SITE_FAIL,
	props<{reason: String}>()
);

export const loadSites = createAction(
	AdminActions.LOAD_SITES
);

export const loadSitesSuccess = createAction(
	AdminActions.LOAD_SITES_SUCCESS
);

export const loadSitesFail = createAction(
	AdminActions.LOAD_SITES_FAIL,
	props<{reason: string}>()
);

export const clearErrors = createAction(
	AdminActions.CLEAR_ERRORS
)

export const addBuilding = createAction(
	AdminActions.ADD_BUILDING,
	props<{building: building}>()
)

export const addBuildingSuccess = createAction(
	AdminActions.ADD_BUILDING_SUCCESS,
	props<{building: building}>()
)

export const addBuildingFail = createAction(
	AdminActions.ADD_BUILDING_FAIL,
	props<{reason: String}>()
)

export const loadBuildings = createAction(
	AdminActions.ADD_BUILDING
)

export const loadBuildingsSuccess = createAction(
	AdminActions.ADD_BUILDING_SUCCESS
)

export const loadBuildingsFail = createAction(
	AdminActions.LOAD_BUILDINGS_FAIL,
	props<{reason: string}>()
)