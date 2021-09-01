import { createReducer, on } from "@ngrx/store";
import { loadInboxAction, loadInboxFailAction, loadInboxSuccessAction, 
    loadOutboxAction, loadOutboxFailAction, loadOutboxSuccessAction, 
    sendEmailAction, sendEmailFailAction, sendEmailSuccessAction } from "./email.actions";
import { initialEmailState } from "./email.state";

export const emailReducer = createReducer(
    initialEmailState,
    on(sendEmailAction, (state) => ({...state, sending: true})),
    on(sendEmailSuccessAction, (state, {email}) => ({...state, sending: false, outbox: [...state.outbox, email]})),
    on(sendEmailFailAction, (state, {reason}) => ({...state, sending: false, errors: [...state.errors, reason]})),
    on(loadInboxAction, (state) => ({...state, loading: true})),
    on(loadInboxSuccessAction, (state, {inbox}) => ({...state, loading: false, inbox: inbox})),
    on(loadInboxFailAction, (state, {reason}) => ({...state, loading: false, errors: [...state.errors, reason]})),
    on(loadOutboxAction, (state) => ({...state, loading: true})),
    on(loadOutboxSuccessAction, (state, {outbox}) => ({...state, loading: false, outbox: outbox})),
    on(loadOutboxFailAction, (state, {reason}) => ({...state, loading: false, errors: [...state.errors, reason]}))
);