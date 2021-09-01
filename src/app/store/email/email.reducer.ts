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
    on(loadInboxAction, (state) => ({...state, outboxLoading: true})),
    on(loadInboxSuccessAction, (state, {inbox}) => ({...state, inboxLoading: false, inbox: inbox})),
    on(loadInboxFailAction, (state, {reason}) => ({...state, inboxLoading: false, errors: [...state.errors, reason]})),
    on(loadOutboxAction, (state) => ({...state, outboxLoading: true})),
    on(loadOutboxSuccessAction, (state, {outbox}) => ({...state, outboxLoading: false, outbox: outbox})),
    on(loadOutboxFailAction, (state, {reason}) => ({...state, outboxLoading: false, errors: [...state.errors, reason]}))
);