export const types = {
  AUTH: {
    LOGIN: {
      REQUEST: "auth/LOGINREQUEST",
      SUCCESS: "auth/LOGINSUCCESS",
      FAILURE: "auth/LOGINFAILURE"
    },
    LOGOUT: {
      REQUEST: "auth/LOGOUT",
      SUCCESS: "auth/LOGOUTSUCCESS",
      FAILURE: "auth/LOGOUTFAILURE"
    },
    UPDATE: {
        USER:'auth/UPDATEUSERDATA'
    }
  }
};

export const loginRequest = () => ({
  type: types.AUTH.LOGIN.REQUEST,
});

export const loginSuccess = user => ({
  type: types.AUTH.LOGIN.SUCCESS,
  user
});

export const loginFailure = error => ({
  type: types.AUTH.LOGIN.FAILURE,
  error
});

export const logoutRequest = () => ({
  type: types.AUTH.LOGOUT.REQUEST
});

export const logoutSuccess = () => ({
  type: types.AUTH.LOGOUT.SUCCESS
});

export const logoutFailure = error => ({
  type: types.AUTH.LOGOUT.FAILURE,
  error
});

export const updateUserData = user => ({
  type: types.AUTH.UPDATE.USER,
  user
});
