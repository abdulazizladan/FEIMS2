import { Site } from '../../admin/models/site.model';

export interface SiteState {
  loading: boolean;
  sites: Site[];
  errors: String[];
}

export const initialSiteState: SiteState = {
  loading: false,
  sites: [],
  errors: []
};