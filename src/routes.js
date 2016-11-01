import React from 'react'
import { Route, IndexRoute, IndexRedirect } from 'react-router'
import App from './containers/App'
import Portal from './features/portal/Portal'
import Register from './features/session/Register'
import Login from './features/session/Login'
import Session from './features/session/Session'
import Actionbar from './features/profile/Actionbar'
import Profile from './features/profile/Profile'
import PackageEditor from './features/profile/PackageEditor'

export default  (
  <Route path="/" >
    <IndexRoute component={Portal} />
    <Route path="login" component={Login} />
    <Route path="register" component={Register} />
    <Route component={Session}>
      <Route path=":username" component={Actionbar}>
        <IndexRoute component={Profile} />
        <Route path=":packageId" component={PackageEditor} />
      </Route>
    </Route>
  </Route>
)

/**
* /     portal
*
* /login    login
*
* /register   register
*
* /:name    user page  show all the package.json of the user
*
* /:name/:packageId package.json detail&edit page
*/
