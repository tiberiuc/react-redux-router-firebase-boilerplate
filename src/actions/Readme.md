
Example of async action

```
import {
  ADD_ITEM
} from '../constants/ActionTypes'

import axios from 'axios'


export const load = () => dispatch => {
    axios.get(URL).then( response => {
      response.data.map( item => {
        dispatch({type: ADD_ITEM, data: item.data} ))
      })
    })
  }

```


