import { createAction } from 'redux-actions';

export interface IShowNotification {
  text: string;
}

export const showNotification = createAction('SHOW_NOTIFICATION');
export const closeNotification = createAction('CLOSE_NOTIFICATION');
