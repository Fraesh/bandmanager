import { types } from './setlistsActions'



export default function reducer (state = [], action = {}) {
    switch (action.type) {
      case types.SETLISTS.SYNC:
        return action
      default:
        return state
    }
  }