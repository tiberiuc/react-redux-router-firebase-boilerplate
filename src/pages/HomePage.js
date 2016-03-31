import React, {Component} from 'react'
import {connect} from 'react-redux'
import {push} from 'react-router-redux'

@connect(
  state => state
)
export default class Home extends Component {

  navigate = event => {
    const {dispatch} = this.props
    event.preventDefault()
    dispatch(push('/otherpage'))
  }

  render() {
    const {state, dispatch} = this.props
    return (
      <div>
        <h1>Home Page</h1>

        <a href="#" onClick={this.navigate}>Go To Other Page</a>

      </div>
    )
  }

}
