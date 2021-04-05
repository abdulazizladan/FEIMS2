
export interface AuthState {
    token: string;
    user: any;
}

export const initialAuthState: AuthState = {
    token: undefined,
    user: undefined
};