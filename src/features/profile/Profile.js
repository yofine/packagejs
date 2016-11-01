import React, { Component } from 'react'
import { connect } from 'react-redux'
import { PackageList } from '../../components'
import { fetchPackage } from './redux/package'

const mapStateToProps = (state, ownProps) => {
  return {
    packages: state.packages
  }
}

@connect(mapStateToProps)
export default class Profile extends Component {

  render() {
    const { packages, params } = this.props
    const prefix = params.username
    return (
      <div className="container">
        <h1>
          <span>Your Package.json</span>
        </h1>
        <PackageList list={_.sortBy(packages.data, e => (-e.updatedAt))} prefix={prefix} />
      </div>
    )
  }
}
