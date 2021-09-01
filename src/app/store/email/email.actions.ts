import { createAction, props } from "@ngrx/store";
import { Email } from "./email";

export enum EmailActions {
    SEND_EMAIL = '[EMAIL] Send Email',
    SEND_EMAIL_FAIL = '[EMAIL] Send Email Failed',
    SEND_EMAIL_SUCCESS = '[EMAIL] Send Email Success',
    LOAD_EMAILS = '[EMAIL] Load Emails',
    LOAD_EMAILS_SUCCESS = '[EMAIL] Load Emails Successful',
    LOAD_EMAILS_FAILED = '[EMAIL] Load Emails Failed'
}

export const sendEmailAction = createAction(
    EmailActions.SEND_EMAIL,
    props<{email: Email}>()
);

export const sendEmailSuccessAction = createAction(
    EmailActions.SEND_EMAIL_SUCCESS,
    props<{email: Email}>()
);

export const sendEmailFailAction = createAction(
    EmailActions.SEND_EMAIL_FAIL,
    props<{reason: string}>()
);

export const loadEmailsAction = createAction(
    EmailActions.LOAD_EMAILS
);

export const loadEmailsSuccessAction = createAction(
    EmailActions.LOAD_EMAILS_SUCCESS,
    props<{emails: Email[]}>()
);

export const loadEmailsFailAction = createAction(
    EmailActions.LOAD_EMAILS_FAILED,
    props<{reason: string}>()
);
