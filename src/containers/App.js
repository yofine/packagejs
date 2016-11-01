import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { Header, ContainerWrapper } from '../components'

@connect()
export default class App extends Component {

  static propTypes = {
    children: PropTypes.node,
  }

  render() {
    return (
      <div>
        <Header />
        <ContainerWrapper {...this.props} />
      </div>
    )
  }
}
