import React, { Component } from 'react'
import { connect } from 'react-redux'
import { checkLogin } from './redux/login'

import { Header, ContainerWrapper, SimpleNav } from '../../components'

@connect()
export default class Session extends Component {

  componentWillMount() {
    this.props.dispatch(checkLogin())
  }

  render() {
    return (
      <div>
        <Header />
        {this.props.children}
      </div>
    )
  }
}
