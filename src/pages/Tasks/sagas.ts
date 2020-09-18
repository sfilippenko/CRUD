import { Action } from 'redux-actions';
import { takeEvery, call, all, put, delay } from 'redux-saga/effects';
import * as actions from './actions';
import { GET, POST } from '../../utils/api';

function* getTasks() {
  try {
    yield delay(1000);
    const response = yield call(GET, '/list');
    yield put(actions.setTasks(response.data));
  } catch (e) {
    yield put(actions.setTasks(null));
  }
}

function* createTask({ payload }: Action<actions.ICreateTask>) {
  try {
    yield delay(1000);
    const response = yield call(POST, '/list', payload.formValues);
    yield put(actions.setTask(response));
    payload.onSuccess?.();
  } catch (e) {
    payload.onError?.(e);
  } finally {
    payload.onFinally?.();
  }
}

export default function* () {
  yield all([
    takeEvery(actions.getTasks, getTasks),
    takeEvery(actions.createTask, createTask),
  ]);
}
