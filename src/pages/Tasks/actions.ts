import { createAction } from 'redux-actions';
import { IResponseCallbacks } from '../../types/common';
import { ITask, ITaskForm } from './types';

export interface ICreateTask extends IResponseCallbacks {
  formValues: ITaskForm;
}

export const getTasks = createAction('GET_TASKS');
export const setTasks = createAction<ITask[] | null>('SET_TASKS');
export const createTask = createAction<ICreateTask>('CREATE_TASK');
export const createTaskSuccess = createAction<ITask>('CREATE_TASK_SUCCESS');
export const deleteTask = createAction<number>('DELETE_TASK');
export const deleteTaskSuccess = createAction<number>('DELETE_SUCCESS');
export const deleteTaskFailure = createAction<number>('DELETE_TASK_FAILURE');
