import { Notification } from './notification'

export interface NotificationState {
  notifications: Notification[],
  loading: boolean,
  unseenCount: number,
  errors: string[]
};

export const initialNotificationState: NotificationState = {
  notifications: [],
  loading: false,
  errors: [],
  unseenCount: 0
};