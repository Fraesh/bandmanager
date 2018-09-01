import { types } from './songsActions'



export default function reducer (state = [], action = {}) {
    switch (action.type) {
      case types.SONGS.SYNC:
      console.log("got to reducer");
        return action
      default:
        return state
    }
  }