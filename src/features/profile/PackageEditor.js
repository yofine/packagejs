import React, { Component } from 'react'
import { connect } from 'react-redux'
import { CodeEditer } from '../../components'
import { updatePackage } from './redux/package'
import './PackageEditor.less'

const mapStateToProps = (state, ownProps) => {
  const packages = state.packages
  if(!packages.data) return {}
  const currentPackage = _.find(packages.data, e => e.id == ownProps.params.packageId)
  return {
    updating: packages.updating,
    currentPackage,
  }
}

@connect(mapStateToProps)
export default class PackageEditor extends Component {

  updatePackage = (data) => {
    const { dispatch, params } = this.props
    dispatch(updatePackage(data, {id: params.packageId}))
  }
  onChange = (a) => {
    this.updatePackage({content: a.doc.getValue()})
  }

  onTitleChange = (e) => {
    this.updatePackage({title: e.currentTarget.value })
  }

  render() {
    const { currentPackage, updating } = this.props
    if(!currentPackage) {
      return (
        <div className="container">
        </div>
      )
    }
    return (
      <div className="container">
        <h1>
          <input
            className="title-input"
            placeholder="untitled package.json"
            value={currentPackage.get('title')}
            onChange={this.onTitleChange}
          />
          <span className="pull-right">
          {
            updating == false
            ?<span className="text-muted">Saved</span>
            :<span className="text-green">Saving</span>
          }

          </span>
        </h1>
        <CodeEditer value={currentPackage.get('content')} onChange={this.onChange} />
      </div>
    )
  }
}
