import { all, fork } from 'redux-saga/effects';
import tasksSagas from './pages/Tasks/sagas';

export default function* () {
  yield all([fork(tasksSagas)]);
}
