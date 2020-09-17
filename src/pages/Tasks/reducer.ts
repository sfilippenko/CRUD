import { Action, handleActions } from 'redux-actions';
import * as actions from './actions';
import { ITask } from './types';

export interface ITasksState {
  items: ITask[] | null;
  loading: boolean;
  loaded: boolean;
}

const defaultState: ITasksState = {
  items: null,
  loading: false,
  loaded: false,
};

export default handleActions<ITasksState, any>(
  {
    [actions.getTasks.toString()]: (state) => {
      return {
        ...state,
        loading: true,
      };
    },
    [actions.setTasks.toString()]: (state, { payload }: Action<ITask[] | null>) => {
      return {
        ...state,
        loading: false,
        loaded: true,
        items: payload,
      };
    },
  },
  defaultState,
);
