
import { all, call, fork, takeEvery } from 'redux-saga/effects'

import {
  types,
  syncSetlists
} from './setlistsActions'

import rsf from '../rsf'

function * addSetlistSaga (action) {
  console.log(action);
    yield call(rsf.firestore.addDocument, 'setlists', {
      name:action.setlist.name,
      sets:[],
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
  
  export default function * rootSaga () {
    yield all([
      fork(syncSetlistsSaga),
      takeEvery(types.SETLISTS.ADD, addSetlistSaga),
    ])
  }