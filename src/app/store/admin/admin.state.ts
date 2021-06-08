import { Site } from '../../admin/models/site.model';

export interface AdminState {
  loading: boolean;
  sites: Site[];
  errors: String[];
}

export const initialAdminState: AdminState = {
  loading: false,
  sites: [],
  errors: []
};