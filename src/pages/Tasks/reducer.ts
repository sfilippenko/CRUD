import { Action, handleActions } from 'redux-actions';
import * as actions from './actions';
import { ITask } from './types';

export interface ITasksState {
  items: ITask[] | null;
  loading: boolean;
  loaded: boolean;
  loadingIds: number[];
}

const defaultState: ITasksState = {
  items: null,
  loading: false,
  loaded: false,
  loadingIds: [],
};

export default handleActions<ITasksState, any>(
  {
    [actions.getTasks.toString()]: (state) => {
      return {
        ...state,
        loading: true,
      };
    },
    [actions.setTasks.toString()]: (
      state,
      { payload }: Action<ITask[] | null>,
    ) => {
      return {
        ...state,
        loading: false,
        loaded: true,
        items: payload,
        loadingIds: [],
      };
    },
    [actions.createTaskSuccess.toString()]: (
      state,
      { payload }: Action<ITask>,
    ) => {
      return {
        ...state,
        items: [...state.items, payload],
      };
    },
    [actions.editTaskSuccess.toString()]: (
      state,
      { payload }: Action<ITask>,
    ) => {
      return {
        ...state,
        items:
          state.items &&
          state.items.map((item) => {
            if (item.id === payload.id) {
              return payload;
            }
            return item;
          }),
      };
    },
    [actions.deleteTask.toString()]: (state, { payload }: Action<number>) => {
      return {
        ...state,
        loadingIds: [...state.loadingIds, payload],
      };
    },
    [actions.deleteTaskSuccess.toString()]: (
      state,
      { payload }: Action<number>,
    ) => {
      return {
        ...state,
        items: state.items && state.items.filter((item) => item.id !== payload),
        loadingIds: state.loadingIds.filter((id) => payload !== id),
      };
    },
    [actions.deleteTaskFailure.toString()]: (
      state,
      { payload }: Action<number>,
    ) => {
      return {
        ...state,
        loadingIds: state.loadingIds.filter((id) => payload !== id),
      };
    },
  },
  defaultState,
);
