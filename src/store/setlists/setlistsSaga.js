
import { all, call, fork, takeEvery, select } from 'redux-saga/effects'
import uuid from 'uuid';
import {
  types,
  syncSetlists
} from './setlistsActions'

import rsf from '../rsf'

function * addSetlistSaga (action) {
    yield call(rsf.firestore.addDocument, 'setlists', {
      name:action.setlist.name,
      sets:{},
      setOrder:[],
      date:action.setlist.date,
      songs: 0,
      length:'00:00',
    })
  }
  
  

  const SetlistsTransformer = setlists => {
    const res = []
    setlists.forEach(doc => res.push({
      id: doc.id,
      ...doc.data()
    }))
    return res
  }

  function * syncSetlistsSaga () {
    yield fork(
      rsf.firestore.syncCollection,
      'setlists',
      {
        successActionCreator: syncSetlists,
        transform: SetlistsTransformer
      }
    )
  }

  function* addSetSaga (action) {
    let setlist = yield select((state) => state.setlists.find(set => set.id === action.setlistId))
    const key = uuid.v4();
    setlist.sets[key] = []
    yield call(rsf.firestore.updateDocument, `setlists/${action.setlistId}`, {
      sets:setlist.sets,
      setOrder:[...setlist.setOrder, key]
    })
  }
  
  export default function * rootSaga () {
    yield all([
      fork(syncSetlistsSaga),
      takeEvery(types.SETLISTS.ADD, addSetlistSaga),
      takeEvery(types.SETLISTS.SETLIST.ADD, addSetSaga)
    ])
  }