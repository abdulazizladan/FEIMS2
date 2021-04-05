import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { AppSocket } from "app/app.socket";
import { mergeMap, tap } from "rxjs/operators";
import { loginSuccess, logout } from "./auth.actions";

@Injectable()
export class AuthEffect {

  // after user has succesfully logged in,
  // we send login event to socket and
  // wait for the response.
  loginSuccess$ = createEffect(() => this.actions$.pipe(
    ofType(loginSuccess),
    tap(({token, user}) => {
      localStorage.setItem('auth', JSON.stringify({token, user}))
    }),
    mergeMap(({token, user}) => {
      return this.appSocket.onLogin({token, user})
    }),
    tap(response => {

      // this is where we processed the response from the socket,
      // maybe dispatch a new event buf for now
      // the response returned is the same as user payload from login.
      console.log(response);
    })
  ), {dispatch: false});

  // clear auth profile from local storage
  logout$ = createEffect(() => this.actions$.pipe(
    ofType(logout),
    tap(() => localStorage.removeItem('auth')),
    mergeMap(() => {
      return this.appSocket.onLogout()
    }),
    tap(response => {

      // event coming from socket logout
      // which for now no response was returned
      console.log(response);
    })
  ), {dispatch: false});

  constructor(
    private actions$: Actions,
    private appSocket: AppSocket) {}
  
}