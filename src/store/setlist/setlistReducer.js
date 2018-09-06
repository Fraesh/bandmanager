import { types } from './setlistActions'



export default function reducer (state = null, action = {}) {
    switch (action.type) {
      case types.SETLIST.SYNC_SUCCESS:
      console.log(action);
        return action.setlist || state;
      default:
        return state
    }
  }