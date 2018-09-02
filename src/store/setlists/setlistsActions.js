export const types = {SETLISTS:{ADD:'setlists/ADDSETLIST',SYNC:'setlists/SYNCSETLISTS'}};

export const addSetlist = setlist => ({
    type: types.SETLISTS.ADD,
    setlist
});

export const syncSetlists = setlists => ({
    type: types.SETLISTS.SYNC,
    setlists
});