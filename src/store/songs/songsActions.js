export const types = {
  SONGS: {
    ADD: "songs/ADDSONG",
    UPDATE: "songs/UPDATE",
    SYNC: "songs/SYNCSONGS"
  }
};

export const addSong = song => ({
  type: types.SONGS.ADD,
  song
});

export const updateSong = song => ({
  type: types.SONGS.UPDATE,
  song
});

export const syncSongs = songs => ({
  type: types.SONGS.SYNC,
  songs
});
