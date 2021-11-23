import authSaga from 'features/auth/authSaga';
import counterSaga from 'features/counter/counterSaga';
import { all } from 'redux-saga/effects';

export default function* rootSaga() {
  console.log('root Saga');
  yield all([authSaga(), counterSaga()]);
}
