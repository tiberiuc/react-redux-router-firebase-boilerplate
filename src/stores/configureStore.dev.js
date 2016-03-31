import {createStore, applyMiddleware, combineReducers, compose} from 'redux'
import thunkMiddleware from 'redux-thunk'

import { browserHistory  } from 'react-router'
import { syncHistory, routeReducer  } from 'react-router-redux'

// Redux DevTools store enhancers
import {persistState } from 'redux-devtools'
import DevTools from '../containers/DevTools'

import {reduxReactFirebase, firebaseStateReducer} from 'redux-react-firebase'

import routes from '../routes/index.js'
import reducers from '../reducers'

import configs from '../configs'


const rootReducer = combineReducers({
  ...reducers,
  routing: routeReducer,
  firebase: firebaseStateReducer
})

const reduxRouterMiddleware = syncHistory(browserHistory)

const createStoreWithMiddleware = compose(
    applyMiddleware(thunkMiddleware),

    applyMiddleware(reduxRouterMiddleware),

    //reduxReactFirebase(configs.firebase.url, {userProfile:'users'}),

    DevTools.instrument(),
    persistState(
      window.location.href.match(
        /[?&]debug_session=([^&]+)\b/
      )
    )
)(createStore);

export default function configureStore(initialState) {
  const store = createStoreWithMiddleware(rootReducer, initialState)
  reduxRouterMiddleware.listenForReplays(store)

  if (module.hot) {
    module.hot.accept('../reducers', () =>
      store.replaceReducer(require('../reducers'))
    )
  }

  return store
}

