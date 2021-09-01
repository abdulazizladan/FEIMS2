import { createAction, props } from "@ngrx/store";
import { Notification } from './notification';

export enum NotificationActions {
  LOAD_NOTIFICATIONS = '[NOTIFICATION] Load Notifications',
  LOAD_NOTIFICATIONS_SUCCESS = '[NOTIFICATION] Load Notification Success',
  LOAD_NOTIFICATIONS_FAIL= '[NOTIFICATION] Load Notification Fail',
  ADD_NOTIFICATION = '[NOTIFICATION] Add Notification',
  CLEAR_NOTIFICATIONS = '[NOTIFICATION] Clear Notification',
  SEEN_NOTIFICATION = '[NOTIFICATION] Seen Notification'
}

export const loadNotificationsAction = createAction(
  NotificationActions.LOAD_NOTIFICATIONS
);

export const loadNotificationsSuccessAction = createAction(
  NotificationActions.LOAD_NOTIFICATIONS,
  props<{notifications: Notification[]}>()
);

export const loadNotificationsFailAction = createAction(
  NotificationActions.LOAD_NOTIFICATIONS_FAIL,
  props<{reason: string}>()
);

export const addNotificationAction = createAction(
  NotificationActions.ADD_NOTIFICATION,
  props<{notification: Notification}>()
);

export const clearNotificationAction = createAction(
  NotificationActions.CLEAR_NOTIFICATIONS
);

export const seenNotificationAction = createAction(
  NotificationActions.SEEN_NOTIFICATION,
  props<{id: string}>()
);