import { createAction, props } from "@ngrx/store";
import { Email } from "app/admin/models/email.model";

export enum EmailActions {
  SEND_EMAIL = '[EMAIL] Send Email',
  SEND_EMAIL_FAIL = '[EMAIL] Send Email Failed',
  SEND_EMAIL_SUCCESS = '[EMAIL] Send Email Success',
  LOAD_INBOX = '[EMAIL] Load inbox',
  LOAD_INBOX_SUCCESS = '[EMAIL] Load inbox Successful',
  LOAD_INBOX_FAILED = '[EMAIL] Load Emails Failed',
  LOAD_OUTBOX = '[EMAIL] Load outbox',
  LOAD_OUTBOX_SUCCESS = '[EMAIL] Load outbox Successful',
  LOAD_OUTBOX_FAILED = '[EMAIL] Load outbox Failed',
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

export const loadInboxAction = createAction(
  EmailActions.LOAD_INBOX
);

export const loadInboxSuccessAction = createAction(
  EmailActions.LOAD_INBOX_SUCCESS,
  props<{inbox: Email[]}>()
);

export const loadInboxFailAction = createAction(
  EmailActions.LOAD_INBOX_FAILED,
  props<{reason: string}>()
);

export const loadOutboxAction = createAction(
  EmailActions.LOAD_OUTBOX
);

export const loadOutboxSuccessAction = createAction(
  EmailActions.LOAD_OUTBOX_SUCCESS,
  props<{outbox: Email[]}>()
);

export const loadOutboxFailAction = createAction(
  EmailActions.LOAD_OUTBOX_FAILED,
  props<{reason: string}>()
);
