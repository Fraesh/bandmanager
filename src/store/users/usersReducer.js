import { types } from './usersActions'



export default function reducer (state = [], action = {}) {
    switch (action.type) {
      case types.USERS.SYNC:
        return action.users
      default:
        return state
    }
  }