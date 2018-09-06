
import { all, call, fork, takeEvery, select, take, cancel, takeLatest } from 'redux-saga/effects'
import uuid from 'uuid';
import {
  types,
  syncSetlistSuccess
} from './setlistActions'

import rsf from '../rsf'

  

  const SetlistTransformer = setlist => {
    return setlist.data()

  }

  function * syncSetlistSaga (action) {
    console.log(action.setlistId)
    let setlistSync = yield fork(
      rsf.firestore.syncDocument,
      `setlists/${action.setlistId}`,
      {
        successActionCreator: syncSetlistSuccess,
        transform: SetlistTransformer
      }
    )

    yield take('STOP_SYNC');
    yield cancel(setlistSync);
  }

  function* addSetSaga (action) {
    let setlist = yield select((state) => state.setlist)
    const key = uuid.v4();
    setlist.sets[key] = []
    yield call(rsf.firestore.updateDocument, `setlists/${setlist.id}`, {
      sets:setlist.sets,
      setOrder:[...setlist.setOrder, key]
    })
  }
  
  export default function * rootSaga () {
    yield all([
      takeLatest(types.SETLIST.SYNC, syncSetlistSaga),
      takeEvery(types.SETLIST.ADD, addSetSaga),

    ])
  }