import { Injectable } from "@angular/core";
import { Actions, ofType } from "@ngrx/effects";
import { EmailService } from "app/admin/services/email.service";
import { of } from "rxjs";
import { catchError, exhaustMap, map } from "rxjs/operators";
import { loadInboxAction, loadInboxFailAction, loadInboxSuccessAction, 
  loadOutboxAction, loadOutboxFailAction, loadOutboxSuccessAction, 
  sendEmailAction, sendEmailFailAction, sendEmailSuccessAction } from "./email.actions";


@Injectable()
export class EmailEffect {

  loadInbox$ = this.actions$.pipe(
    ofType(loadInboxAction),
    exhaustMap(() => this.emailService.getInbox().pipe(
        map(inbox => loadInboxSuccessAction({inbox})),
        catchError(error => of(loadInboxFailAction({reason: error})))
    ))
  );

  loadOutbox$ = this.actions$.pipe(
    ofType(loadOutboxAction),
    exhaustMap(() => this.emailService.getOutbox().pipe(
        map(outbox => loadOutboxSuccessAction({outbox})),
        catchError(error => of(loadOutboxFailAction({reason: error})))
    ))
  );

  sendEmail$ = this.actions$.pipe(
    ofType(sendEmailAction),
    exhaustMap(({email}) => this.emailService.send(email).pipe(
        map(email => sendEmailSuccessAction({email})),
        catchError(error => of(sendEmailFailAction({reason: error})))
    ))
  );

  constructor(private readonly actions$: Actions, private readonly emailService: EmailService) {}
}