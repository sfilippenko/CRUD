import { Action } from 'redux-actions';
import { takeEvery, call, all, put, delay } from 'redux-saga/effects';
import * as actions from './actions';
import { GET, DELETE, POST } from '../../utils/api';

function* getTasks() {
  try {
    yield delay(1000);
    const response = yield call(GET, '/list');
    yield put(actions.setTasks(response.data));
  } catch (e) {
    yield put(actions.setTasks(null));
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
  } finally {
    payload.onFinally?.();
  }
}

function* deleteTask({ payload }: Action<number>) {
  try {
    yield delay(1000);
    yield call(DELETE, `/list/${payload}`);
  } catch (e) {
    //
  } finally {
    yield put(actions.deleteTaskDone(payload));
  }
}

export default function* () {
  yield all([
    takeEvery(actions.getTasks, getTasks),
    takeEvery(actions.createTask, createTask),
    takeEvery(actions.deleteTask, deleteTask),
  ]);
}
