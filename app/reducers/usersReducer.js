import {
  GET_USERS
} from '../constants'

const initialUsersState = {
  usersList: [],
  selected: {}
}

export default (state = initialUsersState, action) => {
  const newState = Object.assign({}, state)

  switch (action.type) {
    case GET_USERS:
      newState.usersList = action.usersList
      break
    default: return newState
  }
  return newState
}
