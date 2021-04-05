import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { AppSocket } from "app/app.socket";
import { tap } from "rxjs/operators";
import { loginSuccess } from "./auth.actions";

@Injectable()
export class AuthEffect {

  loginSuccess$ = createEffect(() => this.actions$.pipe(
    ofType(loginSuccess),
    tap(({token, user}) => {
      this.appSocket.onLogin({token, user});
    })
  ), {dispatch: false});

  constructor(
    private actions$: Actions,
    private appSocket: AppSocket) { }
}