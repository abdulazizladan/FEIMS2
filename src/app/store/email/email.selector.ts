import { createFeatureSelector, createSelector } from "@ngrx/store";
import { EmailState } from "./email.state";


export const selectEmailState = createFeatureSelector<EmailState>('email');

export const selectInbox = createSelector(
    selectEmailState,
    (state: EmailState) => state.inbox
);

export const selectOutbox = createSelector(
    selectEmailState,
    (state: EmailState) => state.outbox
);

export const selectInboxLoading = createSelector(
    selectEmailState,
    (state: EmailState) => state.inboxLoading
);

export const selectOutboxLoading = createSelector(
    selectEmailState,
    (state: EmailState) => state.outboxLoading
);

export const selectSending = createSelector(
    selectEmailState,
    (state: EmailState) => state.outboxLoading
);