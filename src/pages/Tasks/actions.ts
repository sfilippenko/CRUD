import { createAction } from 'redux-actions';
import { ITask } from './types';

export const getTasks = createAction('GET_TASKS');
export const setTasks = createAction<ITask[] | null>('SET_TASKS');
