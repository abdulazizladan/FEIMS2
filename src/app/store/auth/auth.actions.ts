import { createAction, props } from "@ngrx/store";

export enum AuthActionTypes {
    LOGIN = '[Auth] Login',
    LOGIN_SUCCESS = '[Auth] Login success'
}

export const login = createAction(AuthActionTypes.LOGIN, props<{payload: {email: string, password: string}}>());
export const loginSuccess = createAction(AuthActionTypes.LOGIN_SUCCESS, props<{payload: any}>());