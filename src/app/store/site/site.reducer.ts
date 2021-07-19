import { createReducer, on } from "@ngrx/store";
import { addSite, addSiteFail, addSiteSuccess, loadSites, loadSitesFail, loadSitesSuccess } from "./site.actions";
import { initialSiteState } from "./site.state";

export const siteReducer = createReducer(
  initialSiteState,
  on(addSite, (state, {site}) => ({...state, loading: true})),
  on(addSiteSuccess, (state, {site}) => ({...state, loading: false, sites: [...state.sites, site]})),
  on(addSiteFail, (state, {reason}) => ({...state, loading: false, errors: [reason, ...state.errors]})),
  on(loadSites, (state) => ({...state, loading: true})),
  on(loadSitesSuccess, (state, {sites}) => ({...state, sites: sites})),
  on(loadSitesFail, (state, {reason}) => ({...state, loading: false}))
);