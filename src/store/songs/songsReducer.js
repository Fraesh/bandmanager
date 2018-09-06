import { types } from './songsActions'



export default function reducer (state = [], action = {}) {
    switch (action.type) {
      case types.SONGS.SYNC:
        return action.songs
      default:
        return state
    }
  }