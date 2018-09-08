import { combineReducers } from "redux";
import songsReducer from "./songs/songsReducer";
import setlistsReducer from "./setlists/setlistsReducer";
import setlistReducer from "./setlist/setlistReducer";
import authReducer from "./auth/authReducer";
import usersReducer from "./users/usersReducer";
import commonReducer from "./common/commonReducer";

export default combineReducers({
  songs: songsReducer,
  setlists: setlistsReducer,
  setlist: setlistReducer,
  auth: authReducer,
  users: usersReducer,
  common: commonReducer
});
