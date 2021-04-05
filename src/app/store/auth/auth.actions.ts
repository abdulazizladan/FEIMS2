import { createAction, props } from '@ngrx/store';

export enum AuthActions {
  LOGIN = '[AUTH] Login',
  LOGIN_SUCCESS = '[AUTH] Login success'
}

export const login = createAction(
  AuthActions.LOGIN
);

export const loginSuccess = createAction(
  AuthActions.LOGIN_SUCCESS,
  props<{token: string, user: any}>()
);