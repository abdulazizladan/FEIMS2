import { createFeatureSelector, createSelector } from "@ngrx/store";
import { SiteState } from "./site.state";


export const selectSiteState = createFeatureSelector<SiteState>('site');

export const selectSites = createSelector(
  selectSiteState,
  (state: SiteState) => state.sites
);

export const selectLoading = createSelector(
  selectSiteState,
  (state: SiteState) => state.loading
);