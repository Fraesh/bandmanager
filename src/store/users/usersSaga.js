import { all, fork } from "redux-saga/effects";

import { syncUsers } from "./usersActions";

import rsf from "../rsf";

const usersTransformer = Users => {
  const res = [];
  Users.forEach(doc =>
    res.push({
      id: doc.id,
      ...doc.data()
    })
  );
  return res;
};

function* syncUsersSaga() {
  yield fork(rsf.firestore.syncCollection, "users", {
    successActionCreator: syncUsers,
    transform: usersTransformer
  });
}

export default function* rootSaga() {
  yield all([fork(syncUsersSaga)]);
}
