import { Action, handleActions } from 'redux-actions';
import * as actions from './actions';

export interface INotificationState {
  text: string;
  show: boolean;
}
const defaultState: INotificationState = {
  text: '',
  show: false,
};

export default handleActions<INotificationState, any>(
  {
    [actions.showNotification.toString()]: (
      state,
      { payload }: Action<actions.IShowNotification>,
    ) => {
      return {
        ...state,
        show: true,
        text: payload.text,
      };
    },
    [actions.closeNotification.toString()]: () => {
      return {
        ...defaultState,
      };
    },
  },
  defaultState,
);
