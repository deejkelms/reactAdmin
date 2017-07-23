import React, {Component} from 'react'
import store from '../store'
import {login} from '../action-creators/auth'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import TextField from 'material-ui/TextField'
import FlatButton from 'material-ui/FlatButton'

export default class Login extends Component {

  render () {
    return (
      <div className='fullpage-section'>
        <form onSubmit={evt => {
          evt.preventDefault()
          store.dispatch(login({email: evt.target.email.value, password: evt.target.password.value}))
          browserHistory.push('/users')
        }}>
          <MuiThemeProvider>
            <div>
              <TextField
                name='email'
                hintText='email'
                floatingLabelText='email'
              />
              <br />
              <TextField
                name='password'
                hintText='password'
                floatingLabelText='password'
              />
              <br />
              <FlatButton label='Login' type='submit' />
            </div>
          </MuiThemeProvider>
        </form>
      </div>
    )
  }
}
