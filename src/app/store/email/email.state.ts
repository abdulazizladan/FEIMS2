import { Email } from "app/admin/models/email.model";


export interface EmailState {
    inbox: Email[],
    outbox: Email[],
    loading: boolean,
    sending: boolean,
    errors: string[]
}

export const initialEmailState: EmailState = {
    inbox: [],
    outbox: [],
    loading: false,
    sending: false,
    errors: []
};