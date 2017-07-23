import {
  SET_LOGGED_IN_ADMIN
} from '../constants'

const initialAuthState = {
  loggedin: {},
  token: null,
  isAuthenticated: false
}

export default (state = initialAuthState, action) => {
  const newState = Object.assign({}, state)

  switch (action.type) {
    case SET_LOGGED_IN_ADMIN:
      newState.loggedin = action.loggedin
      // newState.token = action.loggedin.data.key
      newState.isAuthenticated = true
      break
    default: return newState
  }
  return newState
}
