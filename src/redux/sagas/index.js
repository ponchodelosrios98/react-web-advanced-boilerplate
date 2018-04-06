import { fork, all } from 'redux-saga/effects';

function * startAppSagas() {
  yield all([
  ]);
}

export default function * () {
  yield fork(startAppSagas);
}
