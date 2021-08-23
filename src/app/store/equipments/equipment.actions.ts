import { createAction, props } from '@ngrx/store';
import { HVE } from '../../admin/models/hve.model';
import { LVE } from '../../admin/models/lve.model';

export enum EquipmentActions {
  ADD_HV_EQUIPMENT = '[EQUIPMENT] Add HVEQUIPMENT',
  ADD_LV_EQUIPMENT = '[EQUIPMENT] Add LVEQUIPMENT',
  ADD_LV_EQUIPMENT_SUCCESS = '[EQUIPMENT] Add EQUIPMENT success',
  ADD_LV_EQUIPMENT_FAIL = '[EQUIPMENT] Add EQUIPMENT fail',
  ADD_HV_EQUIPMENT_SUCCESS = '[EQUIPMENT] Add EQUIPMENT success',
  ADD_HV_EQUIPMENT_FAIL = '[EQUIPMENT] Add EQUIPMENT fail',
  LOAD_EQUIPMENTS = '[EQUIPMENT] Load equipments',
  LOAD_EQUIPMENTS_SUCCESS = '[EQUIPMENT] Load equipments success',
  LOAD_EQUIPMENTS_FAIL = '[EQUIPMENT] Load equipments fail',
  LOAD_HIGH_VALUE_EQUIPMENTS = '[EQUIPMENT] Load high value equipment',
  LOAD_HIGH_VALUE_EQUIPMENTS_SUCCESS = '[EQUIPMENT] Load high value equipment success',
  LOAD_HIGH_VALUE_EQUIPMENTS_FAIL = '[EQUIPMENT] Load high value equipment fail',
  LOAD_LOW_VALUE_EQUIPMENTS = '[EQUIPMENT] Load low value equipment',
  LOAD_LOW_VALUE_EQUIPMENTS_SUCCESS = '[EQUIPMENT] Load low value equipment success',
  LOAD_LOW_VALUE_EQUIPMENTS_FAIL = '[EQUIPMENT] Load low value equipment fail'
}

export const addHVEquipment = createAction(
	EquipmentActions.ADD_HV_EQUIPMENT,
	props<{equipment: HVE}>()
);

export const addLVEquipment = createAction(
	EquipmentActions.ADD_LV_EQUIPMENT,
	props<{equipment: LVE}>()
);

export const addLVEquipmentSuccess = createAction(
  EquipmentActions.ADD_LV_EQUIPMENT_SUCCESS,
  props<{equipment: LVE}>()
);

export const addHVEquipmentSuccess = createAction(
	EquipmentActions.ADD_HV_EQUIPMENT_SUCCESS,
	props<{equipment: HVE }>()
  );

export const addHVEquipmentFail = createAction(
	EquipmentActions.ADD_HV_EQUIPMENT_FAIL,
	props<{reason: string}>()
);

export const addLVEquipmentFail = createAction(
	EquipmentActions.ADD_LV_EQUIPMENT_FAIL,
	props<{reason: string}>()
);

export const loadEquipment = createAction(
	EquipmentActions.LOAD_EQUIPMENTS
);

export const loadEquipmentSuccess = createAction(
	EquipmentActions.LOAD_EQUIPMENTS_SUCCESS,
	props<{equipments: HVE[]}>()
);

export const loadEquipmentFail = createAction(
	EquipmentActions.LOAD_EQUIPMENTS_FAIL,
	props<{reason: string}>()
);


export const loadHighValueEquipment = createAction(
	EquipmentActions.LOAD_HIGH_VALUE_EQUIPMENTS
);

export const loadHighValueEquipmentSuccess = createAction(
	EquipmentActions.LOAD_HIGH_VALUE_EQUIPMENTS_SUCCESS,
	props<{equipments: HVE[]}>()
);

export const loadHighValueEquipmentFail = createAction(
	EquipmentActions.LOAD_HIGH_VALUE_EQUIPMENTS_FAIL,
	props<{reason: string}>()
);

export const loadLowValueEquipment = createAction(
	EquipmentActions.LOAD_LOW_VALUE_EQUIPMENTS
);

export const loadLowValueEquipmentSuccess = createAction(
	EquipmentActions.LOAD_LOW_VALUE_EQUIPMENTS_SUCCESS,
	props<{equipments: LVE[]}>()
);

export const loadLowValueEquipmentFail = createAction(
	EquipmentActions.LOAD_LOW_VALUE_EQUIPMENTS_FAIL,
	props<{reason: string}>()
);