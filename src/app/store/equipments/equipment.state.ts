import { HVE } from '../../admin/models/hve.model';
import { LVE } from '../../admin/models/lve.model';

export interface EquipmentState {
  loading: boolean;
  equipments: HVE[] | LVE[];
  errors: String[];
}

export const initialSiteState: EquipmentState = {
  loading: false,
  equipments: [],
  errors: []
};