import { createReducer, on } from "@ngrx/store";
import { addSite, addSiteFail, addSiteSuccess, clearErrors } from "./admin.actions";
import { initialAdminState } from "./admin.state";

export const adminReducer = createReducer(
    initialAdminState,
    on(addSite, (state, {site}) => ({...state, loading: true})),
    on(addSiteSuccess, (state, {site}) => ({...state, loading: false, sites: [...state.sites, site]})),
    on(addSiteFail, (state, {reason}) => ({...state, loading: false, errors: [reason, ...state.errors]})),
    on(clearErrors, (state) => ({...state, errors: []}))
);