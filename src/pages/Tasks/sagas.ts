import { takeEvery, call, all, put, delay } from 'redux-saga/effects';
import * as actions from './actions';
import { GET } from '../../utils/api';

function* getTasks() {
  try {
    yield delay(1000);
    const response = yield call(GET, '/list');
    yield put(actions.setTasks(response.data));
  } catch (e) {
    yield put(actions.setTasks(null));
  }
}

export default function* () {
  yield all([takeEvery(actions.getTasks, getTasks)]);
}
