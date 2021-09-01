import { createFeatureSelector, createSelector } from "@ngrx/store";
import { NotificationState } from "./notification.state";

export const selectNotificationStore = createFeatureSelector<NotificationState>('notification');

export const selectNotifications = createSelector(
  selectNotificationStore,
  (state: NotificationState) => state.notifications
);

export const selectLoading = createSelector(
  selectNotificationStore,
  (state: NotificationState) => state.loading
);

export const selectUnseenCount = createSelector(
  selectNotificationStore,
  (state: NotificationState) => state.unseenCount
);