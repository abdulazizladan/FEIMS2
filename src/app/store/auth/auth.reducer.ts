import { createReducer, on } from "@ngrx/store";
import { login, loginSuccess } from "./auth.actions";
import { initialState } from "./auth.state";

export const authReducer = createReducer(
    initialState,
    on(login, (state) => {
        return {...state, loading: true};
    }),
    on(loginSuccess, (state, {payload}) => {
        return {...state, loading: false, user: payload};
    })
);