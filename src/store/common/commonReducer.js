import { types } from "./commonActions";

export default function reducer(state = [], action = {}) {
  switch (action.type) {
    case types.COMMON.SYNCNEWS:
      return { ...state, news: action.news };
    default:
      return state;
  }
}
