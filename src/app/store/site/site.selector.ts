import { createFeatureSelector, createSelector } from "@ngrx/store";
import { SitesListComponent } from "app/admin/components/sites-list/sites-list.component";
import { Site } from "app/admin/models/site.model";
import { SiteState } from "./site.state";


export const selectSiteState = createFeatureSelector<SiteState>('site');

export const selectSites = createSelector(
  selectSiteState,
  (state: SiteState) => state.sites
);

export const selectSite = createSelector(
  selectSites,
  (sites: Site[], id: string) => sites.find(sites => sites._id === id)
)

export const selectLoading = createSelector(
  selectSiteState,
  (state: SiteState) => state.loading
);