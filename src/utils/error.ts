import { AxiosError } from 'axios';
import { put } from 'redux-saga/effects';
import { showNotification } from '../components/Notification/actions';

export function* handleResponseError(error: AxiosError) {
  let errorText = error.response?.data?.error || '';
  if (!errorText) {
    errorText = 'Ошибка';
  }
  yield put(showNotification({ text: errorText }));
}
