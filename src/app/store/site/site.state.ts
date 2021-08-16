import { Site } from '../../admin/models/site.model';

export interface SiteState {
  loading: boolean;
  sites: Site[]
}

export const initialSiteState: SiteState = {
  loading: false,
  sites: []
};