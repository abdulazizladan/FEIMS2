import { createAction, props } from '@ngrx/store';
import { Site } from '../../admin/models/site.model';

export enum SiteActions {
  ADD_SITE = '[SITE] Add site',
  ADD_SITE_SUCCESS = '[SITE] Add site success',
	ADD_SITE_FAIL = '[SITE] Add site fail',
	LOAD_SITES = '[SITE] Load sites',
	LOAD_SITES_SUCCESS = '[SITE] Load sites success',
	LOAD_SITES_FAIL = '[SITE] Load sites fail'
}

export const addSite = createAction(
	SiteActions.ADD_SITE,
	props<{site: Site}>()
);

export const addSiteSuccess = createAction(
  SiteActions.ADD_SITE_SUCCESS,
  props<{site: Site}>()
);

export const addSiteFail = createAction(
	SiteActions.ADD_SITE_FAIL,
	props<{reason: string}>()
);

export const loadSites = createAction(
	SiteActions.LOAD_SITES
);

export const loadSitesSuccess = createAction(
	SiteActions.LOAD_SITES_SUCCESS,
	props<{sites: Site[]}>()
);

export const loadSitesFail = createAction(
	SiteActions.LOAD_SITES_FAIL,
	props<{reason: string}>()
);