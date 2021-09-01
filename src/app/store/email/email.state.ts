import { Email } from "./email";

export interface EmailState {
    emails: Email[],
    loading: boolean,
    sending: boolean,
    errors: string[]
}

export const initialEmailState: EmailState = {
    emails: [],
    loading: false,
    sending: false,
    errors: []
};