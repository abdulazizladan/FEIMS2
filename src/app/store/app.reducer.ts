import { routerReducer } from "@ngrx/router-store";
import { ActionReducerMap, MetaReducer } from "@ngrx/store";
import { environment } from "environments/environment";
import { authReducer } from "./auth/auth.reducer";
import { adminReducer } from "./admin/admin.reducer";

export interface AppState {

}

export const reducers: ActionReducerMap<AppState> = {
    router: routerReducer,
    auth: authReducer,
    admin: adminReducer
};

export const metaReducers: MetaReducer<AppState>[] = 
    !environment.production ? [] : [];