
import { all, call, fork, takeEvery } from 'redux-saga/effects'

import {
  types,
  syncSongs
} from './songsActions'

import rsf from '../rsf'

function * addSongSaga (action) {
  console.log(action);
    yield call(rsf.firestore.addDocument, 'songs', {
      name:action.song.name,
      bpm:action.song.bpm,
      key:action.song.key,
      singer: action.song.singer,
      length:action.song.length,
    })
  }
  
  

  const songsTransformer = songs => {
    const res = []
    songs.forEach(doc => res.push({
      id: doc.id,
      ...doc.data()
    }))
    return res
  }

  function * syncSongsSaga () {
    yield fork(
      rsf.firestore.syncCollection,
      'songs',
      {
        successActionCreator: syncSongs,
        transform: songsTransformer
      }
    )
  }
  
  export default function * rootSaga () {
    yield all([
      fork(syncSongsSaga),
      takeEvery(types.SONGS.ADD, addSongSaga),
    ])
  }