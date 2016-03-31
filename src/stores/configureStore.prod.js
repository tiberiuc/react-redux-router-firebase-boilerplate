import {createStore, applyMiddleware, combineReducers, compose} from 'redux'
import thunkMiddleware from 'redux-thunk'

import { browserHistory  } from 'react-router'
import { syncHistory, routeReducer  } from 'react-router-redux'

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

    reduxReactFirebase(configs.firebase.url, {userProfile:'users'})

)(createStore);

export default function configureStore(initialState) {
  const store = createStoreWithMiddleware(rootReducer, initialState)
  reduxRouterMiddleware.listenForReplays(store)

  return store
}

