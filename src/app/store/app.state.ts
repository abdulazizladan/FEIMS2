
export interface AppState {
  auth: {token: string, user: any}
}

export const initialState: AppState = {
  auth: undefined
};