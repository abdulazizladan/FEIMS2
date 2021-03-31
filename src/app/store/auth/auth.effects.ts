import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { AuthService } from '../../auth/services/auth.service';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { login, loginSuccess } from './auth.actions';
import { EMPTY } from 'rxjs';

@Injectable()
export class AuthEffects {
    constructor(
        private readonly actions$: Actions,
        private readonly authService: AuthService
    ) {}

    login$ = createEffect(() => this.actions$.pipe(
        ofType(login),
        mergeMap(({payload}) => this.authService.login(payload).pipe(
            map(user => loginSuccess({payload: user})),
            catchError(() => EMPTY)
        ))
    ));
}