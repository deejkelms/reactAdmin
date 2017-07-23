import React from 'react'
import {render} from 'react-dom'
import {Router, Route, IndexRedirect, IndexRoute, browserHistory} from 'react-router'
import {connect, Provider} from 'react-redux'
import authContainer from './containers/authContainer'
import usersContainer from './containers/usersContainer'
import injectTapEventPlugin from 'react-tap-event-plugin'

injectTapEventPlugin()

render(
  <Router history={browserHistory}>
    <Route path="/" component={authContainer}>
      <Route path="/users" component={usersContainer} />
    </Route>
  </Router>,
  document.getElementById('main')
)
