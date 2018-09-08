import { all, fork } from "redux-saga/effects";

import { syncNews } from "./commonActions";

import rsf from "../rsf";

const newsTransformer = News => {
  const res = [];
  News.forEach(doc =>
    res.push({
      id: doc.id,
      ...doc.data()
    })
  );
  return res;
};

function* syncNewsSaga() {
  yield fork(rsf.firestore.syncCollection, "news", {
    successActionCreator: syncNews,
    transform: newsTransformer
  });
}

export default function* rootSaga() {
  yield all([fork(syncNewsSaga)]);
}
