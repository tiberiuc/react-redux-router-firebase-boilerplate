import React from 'react'
import {Router, Route, Link, browserHistory, IndexRoute} from 'react-router'


import AppContainer from '../containers/AppContainer'

import HomePage from '../pages/HomePage'
import OtherPage from '../pages/OtherPage'
import NoMatch from '../pages/NoMatch'


const routes = (
  <Route>

    <Route path='/' component={AppContainer}>
      <IndexRoute component={HomePage}/>
      <Route path="otherpage" component={OtherPage}/>
    </Route>

    <Route path="*" component={NoMatch}/>
  </Route>
)

export default routes
