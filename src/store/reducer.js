
import { combineReducers } from 'redux'
import songsReducer from './songs/songsReducer'

export default combineReducers({
       songs: songsReducer
  });