export const types = {
  SETLISTS: {
    ADD: "setlists/ADDSETLIST",
    SYNC: "setlists/SYNCSETLISTS",
    SETLIST: { ADD: "setlists/setlists/ADD" }
  }
};

export const addSetlist = setlist => ({
  type: types.SETLISTS.ADD,
  setlist
});

export const addSet = setlistId => ({
  type: types.SETLISTS.SETLIST.ADD,
  setlistId
});

export const syncSetlists = setlists => ({
  type: types.SETLISTS.SYNC,
  setlists
});
