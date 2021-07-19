import { Building } from '../../admin/models/building.model';

export interface BuildingState {
  loading: boolean;
  buildings: Building[];
}

export const initialBuildingState: BuildingState = {
  loading: false,
  buildings: []
};