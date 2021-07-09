import { createReducer, on, createFeatureSelector, createSelector } from '@ngrx/store';
import { building } from 'app/admin/models/building.model';
import { SiteService } from 'app/admin/services/site.service';
import { Site } from '../../admin/models/site.model';

export interface AdminState {
  loading: boolean;
  currentSite: Site,
  sites: Site[];
  currentBuilding: building;
  buildings: building[];
  errors: String[];
}

export const initialAdminState: AdminState = {
  loading: false,
  currentSite: null,
  sites: [],
  currentBuilding: null,
  buildings: [],
  errors: []
};

const getSitesFeatureState = createFeatureSelector<AdminState>('sites');

const getBuildingsFeatureState = createFeatureSelector<AdminState>('buildings');

export const getSites = createSelector(
  getSitesFeatureState,
  state => state.sites
)

export const getBuildings = createSelector(
  getBuildingsFeatureState,
  state => state.buildings
)