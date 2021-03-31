export interface AuthState {
	loggedIn: boolean;
	loading: boolean;
	user: any;
}

export const initialState: AuthState = {
	loading: false,
	loggedIn: false,
	user: {}
};