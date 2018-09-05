export const types = {USERS:{SYNC:'users/SYNC',}};

export const syncUsers = users => ({
    type: types.USERS.SYNC,
    users
});