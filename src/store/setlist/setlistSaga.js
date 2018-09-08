import {
  all,
  call,
  fork,
  takeEvery,
  select,
  put,
  take,
  cancel,
  takeLatest
} from "redux-saga/effects";
import uuid from "uuid";
import {
  types,
  syncSetlistSuccess,
  updateSets,
  stopSyncSetlist,
  resumeSyncSetlist
} from "./setlistActions";

import rsf from "../rsf";

const SetlistTransformer = setlist => {
  return { ...setlist.data(), id: setlist.id };
};

function* syncSetlistSaga(action) {
  while (true) {
    let setlistSync = yield fork(
      rsf.firestore.syncDocument,
      `setlists/${action.setlistId}`,
      {
        successActionCreator: syncSetlistSuccess,
        transform: SetlistTransformer
      }
    );

    yield take(types.SETLIST.STOP_SYNC);
    yield cancel(setlistSync);
    yield take(types.SETLIST.RESUME_SYNC);
  }
}

function* addSetSaga() {
  const setlist = yield select(state => state.setlist);
  const key = uuid.v4();
  setlist.sets[key] = [];
  yield call(rsf.firestore.updateDocument, `setlists/${setlist.id}`, {
    sets: setlist.sets,
    setOrder: [...setlist.setOrder, key]
  });
}

function* deleteSetSaga(action) {
  const { setId } = action;
  const setlist = yield select(state => state.setlist);

  const setPos = setlist.setOrder.indexOf(setId);
  let newSetOrder = setlist.setOrder;
  setPos >= 0 ? newSetOrder.splice(setPos, 1) : null;

  let newSets = setlist.sets;
  delete newSets[setId];
  console.log(setId);
  yield put(stopSyncSetlist());
  yield put(
    updateSets({
      sets: newSets,
      setOrder: newSetOrder
    })
  );
  yield call(rsf.firestore.updateDocument, `setlists/${setlist.id}`, {
    sets: newSets,
    setOrder: newSetOrder
  });
  yield put(resumeSyncSetlist());
}

function* moveSongSaga(action) {
  const setlist = yield select(state => state.setlist);
  const { destination, source, songId } = action;
  if (!destination) {
    return;
  }
  if (
    destination.droppableId === source.droppableId &&
    destination.index === source.index
  ) {
    return;
  }
  if (source.droppableId in setlist.sets) {
    const sourceSet = setlist.sets[source.droppableId];
    sourceSet.splice(source.index, 1);
    setlist.sets[source.droppableId] = sourceSet;
  }
  if (destination.droppableId in setlist.sets) {
    const destinationSet = setlist.sets[destination.droppableId];
    destinationSet.splice(destination.index, 0, songId);
    setlist.sets[destination.droppableId] = destinationSet;
  }
  yield put(stopSyncSetlist());

  yield put(updateSets({ sets: setlist.sets }));

  yield call(rsf.firestore.updateDocument, `setlists/${setlist.id}`, {
    sets: setlist.sets
  });
  yield put(resumeSyncSetlist());
}

export default function* rootSaga() {
  yield all([
    takeLatest(types.SETLIST.SYNC, syncSetlistSaga),
    takeEvery(types.SETLIST.ADD, addSetSaga),
    takeEvery(types.SETLIST.MOVE_SONG, moveSongSaga),
    takeEvery(types.SETLIST.DELETE, deleteSetSaga)
  ]);
}
