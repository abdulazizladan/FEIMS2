import { createAction, props } from '@ngrx/store';
import { HVE } from '../../admin/models/hve.model';
import { LVE } from '../../admin/models/lve.model';

export enum EquipmentActions {
  ADD_HVEQUIPMENT = '[EQUIPMENT] Add HVEQUIPMENT',
  ADD_LVEQUIPMENT = '[EQUIPMENT] Add LVEQUIPMENT',
  ADD_EQUIPMENT_SUCCESS = '[EQUIPMENT] Add EQUIPMENT success',
  ADD_EQUIPMENT_FAIL = '[EQUIPMENT] Add EQUIPMENT fail',
  LOAD_EQUIPMENTS = '[EQUIPMENT] Load equipments',
  LOAD_EQUIPMENTS_SUCCESS = '[EQUIPMENT] Load equipments success',
  LOAD_EQUIPMENTS_FAIL = '[EQUIPMENT] Load equipments fail'
}

export const addHVEquipment = createAction(
	EquipmentActions.ADD_HVEQUIPMENT,
	props<{equipment: HVE}>()
);

export const addLVEquipment = createAction(
	EquipmentActions.ADD_LVEQUIPMENT,
	props<{equipment: LVE}>()
);

export const addEquipmentSuccess = createAction(
  EquipmentActions.ADD_EQUIPMENT_SUCCESS,
  props<{equipment: HVE | LVE}>()
);

export const addEquipmentFail = createAction(
	EquipmentActions.ADD_EQUIPMENT_FAIL,
	props<{reason: string}>()
);

export const loadEquipments = createAction(
	EquipmentActions.LOAD_EQUIPMENTS
);

export const loadEquipmentsSuccess = createAction(
	EquipmentActions.LOAD_EQUIPMENTS_SUCCESS,
	props<{equipments: HVE[]}>()
);

export const loadEquipmentsFail = createAction(
	EquipmentActions.LOAD_EQUIPMENTS_FAIL,
	props<{reason: string}>()
);