import { building } from 'app/admin/models/building.model';
import { Site } from '../../admin/models/site.model';

export interface AdminState {
  loading: boolean;
  sites: Site[];
  buildings: building[];
  errors: String[];
}

export const initialAdminState: AdminState = {
  loading: false,
  sites: [],
  buildings: [],
  errors: []
};