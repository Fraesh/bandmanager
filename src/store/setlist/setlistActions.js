export const types = {
  SETLIST: {
    ADD: "setlist/ADDSETLIST",
    SYNC: "setlist/SYNC_SETLIST",
    SYNC_SUCCESS: "setlist/SYNC_SUCCESS",
    STOP_SYNC: "setlist/STOP_SYNC"
   
  }
};

export const addSet = () => ({
  type: types.SETLIST.ADD,
});

export const syncSetlist = setlistId => ({
  type: types.SETLIST.SYNC,
  setlistId
});

export const syncSetlistSuccess = setlist => ({
  type: types.SETLIST.SYNC_SUCCESS,
  setlist
});

export const stopSyncSetlist = () => ({
  type: types.SETLIST.STOP_SYNC,
});
