import React from 'react'
import {connect} from 'react-redux'
import { Provider } from 'react-redux'
import { Router, browserHistory } from 'react-router'

import routes from '../routes'

export default
@connect()
class App extends React.Component {


  renderRouter () {
    return (
      <Router history={browserHistory}>
        {routes}
      </Router>
    );
  }

  render () {
    const {store} = this.props

    return (
      <div>
        <Provider store={store}>
          <div>
            {this.renderRouter()}
          </div>
        </Provider>
      </div>
    );
  }

}

