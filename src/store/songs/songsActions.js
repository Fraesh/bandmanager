export const types = {SONGS:{ADD:'songs/ADDSONG',SYNC:'songs/SYNCSONGS'}};

export const addSong = song => ({
    type: types.SONGS.ADD,
    song
});

export const syncSongs = songs => ({
    type: types.SONGS.SYNC,
    songs
});