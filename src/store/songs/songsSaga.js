import { all, call, fork, select, takeEvery } from "redux-saga/effects";

import { types, syncSongs } from "./songsActions";

import rsf from "../rsf";

function* addSongSaga(action) {
  const user = yield select(state => state.auth.user.displayName);
  yield call(rsf.firestore.addDocument, "songs", {
    name: action.song.name,
    bpm: action.song.bpm,
    mkey: action.song.mkey,
    singer: action.song.singer,
    length: action.song.length,
    creator: user
  });
}

function* updateSongSaga(action) {
  console.log(action);
  yield call(rsf.firestore.updateDocument, `songs/${action.song.id}`, {
    name: action.song.name,
    bpm: action.song.bpm,
    mkey: action.song.mkey,
    singer: action.song.singer,
    length: action.song.length
  });
}

const songsTransformer = songs => {
  const res = [];
  songs.forEach(doc =>
    res.push({
      id: doc.id,
      ...doc.data()
    })
  );
  return res;
};

function* syncSongsSaga() {
  yield fork(rsf.firestore.syncCollection, "songs", {
    successActionCreator: syncSongs,
    transform: songsTransformer
  });
}

export default function* rootSaga() {
  yield all([
    fork(syncSongsSaga),
    takeEvery(types.SONGS.ADD, addSongSaga),
    takeEvery(types.SONGS.UPDATE, updateSongSaga)
  ]);
}
