
import { all, fork } from 'redux-saga/effects'

import songsSaga from './songs/songsSaga'
import setlistsSaga from './setlists/setlistsSaga'
import authSaga from './auth/authSaga'
import usersSaga from './users/usersSaga'

export default function * rootSaga () {
  yield all([
    fork(songsSaga),
    fork(setlistsSaga),
    fork(authSaga),
    fork(usersSaga)
  ])
}