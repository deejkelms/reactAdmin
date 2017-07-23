import {SET_LOGGED_IN_ADMIN} from '../constants'
import axiosInstance from '../client'
import {browserHistory} from 'react-router'

export const loginAdmin = (loggedin) => ({
    type: SET_LOGGED_IN_ADMIN,
    loggedin
})

export const login = (props) => {
  return dispatch => {
    const {email, password} = props
    axiosInstance.post('/auth/login', {email, password})
    .then(response => {
      dispatch(loginAdmin(response.data))
    })
  }
}
