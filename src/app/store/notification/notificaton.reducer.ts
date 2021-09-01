import { createReducer, on } from "@ngrx/store";
import { addNotificationAction, clearNotificationAction, loadNotificationsAction, loadNotificationsFailAction, loadNotificationsSuccessAction, seenNotificationAction } from "./notification.actions";
import { initialNotificationState } from "./notification.state";

export const notificationReducer = createReducer(
  initialNotificationState,
  on(loadNotificationsAction, (state) => ({...state, loading: true})),
  on(loadNotificationsSuccessAction, (state, {notifications}) => ({...state, loading: false, notifications: notifications})),
  on(loadNotificationsFailAction, (state, {reason}) => ({...state, loading: false, errors: [...state.errors, reason]})),
  on(addNotificationAction, (state, {notification}) => ({...state, notifications: [...state.notifications, notification]})),
  on(clearNotificationAction, (state) => ({...state, notifications: []})),
  on(seenNotificationAction, (state, {id}) => ({...state, notifications: state.notifications.map(notification => {
    if (notification.id === id) notification.seen = true;
    return notification;
  })}))
);