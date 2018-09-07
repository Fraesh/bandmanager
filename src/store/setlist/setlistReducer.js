import { types } from "./setlistActions";

export default function reducer(state = null, action = {}) {
  switch (action.type) {
    case types.SETLIST.SYNC_SUCCESS:
      return action.setlist || state;
    case types.SETLIST.UPDATE_SETS:
      return { ...state, ...action.payload };
    default:
      return state;
  }
}
