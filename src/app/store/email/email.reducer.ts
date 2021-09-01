import { createReducer, on } from "@ngrx/store";
import { loadEmailsAction, loadEmailsFailAction, loadEmailsSuccessAction, 
    sendEmailAction, sendEmailFailAction, sendEmailSuccessAction } from "./email.actions";
import { initialEmailState } from "./email.state";

export const emailReducer = createReducer(
    initialEmailState,
    on(sendEmailAction, (state) => ({...state, sending: true})),
    on(sendEmailSuccessAction, (state, {email}) => ({...state, sending: false, emails: [...state.emails, email]})),
    on(sendEmailFailAction, (state, {reason}) => ({...state, sending: false, errors: [...state.errors, reason]})),
    on(loadEmailsAction, (state) => ({...state, loading: true})),
    on(loadEmailsSuccessAction, (state, {emails}) => ({...state, loading: false, emails: emails})),
    on(loadEmailsFailAction, (state, {reason}) => ({...state, loading: false, errors: [...state.errors, reason]}))
);