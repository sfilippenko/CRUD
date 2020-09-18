import { Action } from 'redux-actions';
import { takeEvery, call, all, put, delay } from 'redux-saga/effects';
import { handleResponseError } from '../../utils/error';
import * as actions from './actions';
import { GET, DELETE, POST } from '../../utils/api';

function* getTasks() {
  try {
    yield delay(1000);
    const response = yield call(GET, '/list');
    yield put(actions.setTasks(response.data));
  } catch (e) {
    yield put(actions.setTasks(null));
    yield call(handleResponseError, e);
  }
}

interface ICreateResponse {
  id: number;
  success: boolean;
  error: string;
}

function* createTask({ payload }: Action<actions.ICreateTask>) {
  try {
    yield delay(1000);
    const response: ICreateResponse = yield call(
      POST,
      '/list',
      payload.formValues,
    );
    yield put(
      actions.createTaskSuccess({
        ...payload.formValues,
        id: response.id,
      }),
    );
    payload.onSuccess?.();
  } catch (e) {
    payload.onError?.(e);
    if (!e.response?.data?.error) {
      yield call(handleResponseError, e);
    }
  }
}

function* editTask({ payload }: Action<actions.IEditTask>) {
  try {
    yield delay(1000);
    yield call(POST, `/list/${payload.id}`, payload.formValues);
    yield put(
      actions.editTaskSuccess({
        ...payload.formValues,
        id: payload.id,
      }),
    );
    payload.onSuccess?.();
  } catch (e) {
    payload.onError?.(e);
    if (!e.response?.data?.error) {
      yield call(handleResponseError, e);
    }
  }
}

function* deleteTask({ payload }: Action<number>) {
  try {
    yield delay(1000);
    yield call(DELETE, `/list/${payload}`);
    yield put(actions.deleteTaskSuccess(payload));
  } catch (e) {
    yield put(actions.deleteTaskFailure(payload));
    yield call(handleResponseError, e);
  }
}

export default function* () {
  yield all([
    takeEvery(actions.getTasks, getTasks),
    takeEvery(actions.createTask, createTask),
    takeEvery(actions.editTask, editTask),
    takeEvery(actions.deleteTask, deleteTask),
  ]);
}
