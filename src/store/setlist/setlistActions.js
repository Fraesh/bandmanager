export const types = {
  SETLIST: {
    ADD: "setlist/ADDSETLIST",
    MOVE_SONG: "setlist/MOVE_SONG",
    UPDATE_SETS: "setlist/UPDATE_SETS",
    SYNC: "setlist/SYNC_SETLIST",
    SYNC_SUCCESS: "setlist/SYNC_SUCCESS",
    STOP_SYNC: "setlist/STOP_SYNC",
    RESUME_SYNC: "setlist/RESUME_SYNC"
  }
};

export const addSet = () => ({
  type: types.SETLIST.ADD
});

export const moveSong = (songId, source, destination) => ({
  type: types.SETLIST.MOVE_SONG,
  songId,
  source,
  destination
});

export const syncSetlist = setlistId => ({
  type: types.SETLIST.SYNC,
  setlistId
});

export const syncSetlistSuccess = setlist => ({
  type: types.SETLIST.SYNC_SUCCESS,
  setlist
});

export const updateSets = sets => ({
  type: types.SETLIST.UPDATE_SETS,
  sets
});

export const stopSyncSetlist = () => ({
  type: types.SETLIST.STOP_SYNC
});

export const resumeSyncSetlist = () => ({
  type: types.SETLIST.RESUME_SYNC
});
