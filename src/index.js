import styles from './assets/css/styles.css'

import React from 'react'
import {render} from 'react-dom'

import App from './containers/App'

import configureStore from './stores'

const store = configureStore()

const targetEl = document.getElementById('root')

const node = <App  store={store}/>
render(node, targetEl)
