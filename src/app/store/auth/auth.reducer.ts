import { createReducer, on } from "@ngrx/store";
import { loginSuccess, logout } from "./auth.actions";
import { initialAuthState } from "./auth.state";

export const authReducer = createReducer(
    initialAuthState,
    on(loginSuccess, (state, {token, user}) => ({token, user})),
    on(logout, (state) => ({token: undefined, user: undefined}))
)