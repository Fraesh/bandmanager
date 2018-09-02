
import { combineReducers } from 'redux'
import songsReducer from './songs/songsReducer'
import setlistsReducer from './setlists/setlistsReducer'
import authReducer from './auth/authReducer'

export default combineReducers({
       songs: songsReducer,
       setlists: setlistsReducer,
       auth: authReducer
  });