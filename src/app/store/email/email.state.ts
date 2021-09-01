import { Email } from "app/admin/models/email.model";

export interface EmailState {
  inbox: Email[],
  outbox: Email[],
  inboxLoading: boolean,
  outboxLoading: boolean,
  sending: boolean,
  errors: string[]
}

export const initialEmailState: EmailState = {
  inbox: [],
  outbox: [],
  inboxLoading: false,
  outboxLoading: false,
  sending: false,
  errors: []
};