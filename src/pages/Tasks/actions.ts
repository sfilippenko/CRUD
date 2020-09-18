import { createAction } from 'redux-actions';
import { IResponseCallbacks } from '../../types/common';
import { ITask, ITaskForm } from './types';

export interface ICreateTask extends IResponseCallbacks {
  formValues: ITaskForm;
}

export const getTasks = createAction('GET_TASKS');
export const setTasks = createAction<ITask[] | null>('SET_TASKS');
export const createTask = createAction<ICreateTask>('CREATE_TASK');
export const setTask = createAction<ITask>('SET_TASK');
