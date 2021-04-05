import { createFeatureSelector, createSelector } from "@ngrx/store";
import { AuthState } from "./auth.state";

export const selectAuthFeature = createFeatureSelector<AuthState>('auth');

export const selectToken = createSelector(
    selectAuthFeature,
    state => state.token
);

export const selectUser = createSelector(
    selectAuthFeature,
    state => state.user
);