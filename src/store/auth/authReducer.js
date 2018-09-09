import { types } from "./authActions";

const initialState = {
  loading: false,
  loggedIn: false,
  user: null
};

export default function reducer(state = [], action = {}) {
  switch (action.type) {
    case types.AUTH.LOGIN.REQUEST:
    case types.AUTH.LOGOUT.REQUEST:
      return {
        ...state,
        loading: true
      };
    case types.AUTH.LOGIN.SUCCESS:
      return {
        ...state,
        loading: false,
        loggedIn: true,
        user: action.user
      };
    case types.AUTH.LOGIN.FAILURE:
      return {
        ...state,
        loading: false
      };
    case types.AUTH.LOGOUT.SUCCESS:
      return initialState;
    case types.AUTH.LOGOUT.FAILURE:
      return {
        ...state,
        loading: false
      };
    default:
      return state;
  }
}
