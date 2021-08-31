import { routerReducer } from "@ngrx/router-store";
import { ActionReducerMap, MetaReducer } from "@ngrx/store";
import { environment } from "environments/environment";
import { authReducer } from "./auth/auth.reducer";
import { buildingReducer } from "./building/building.reducer";
import { emailReducer } from "./email/email.reducer";
import { equipmentReducer } from "./equipments/equipment.reducer";
import { siteReducer } from "./site/site.reducer";

export interface AppState {

}

export const reducers: ActionReducerMap<AppState> = {
  router: routerReducer,
  auth: authReducer,
  site: siteReducer,
  building: buildingReducer,
  equipment: equipmentReducer,
  email: emailReducer
};

export const metaReducers: MetaReducer<AppState>[] = 
  !environment.production ? [] : [];