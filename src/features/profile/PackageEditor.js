import React, { Component } from 'react'
import { connect } from 'react-redux'
import { CodeEditer, DeferInput } from '../../components'
import { updatePackage, removePackage } from './redux/package'
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

  onCodeChange = (cm) => {
    this.updatePackage({content: cm.doc.getValue()})
  }

  onTitleChange = (value) => {
    this.updatePackage({title: value })
  }

  onRemovePackage = () => {
    const { params, dispatch } = this.props
    dispatch(removePackage({id: params.packageId}))
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
          <DeferInput
            placeholder="untitled package.json"
            value={currentPackage.get('title')}
            onChange={this.onTitleChange}
            defer={500}
          />
          <span className="pull-right">
          {
            updating == false
            ?<span className="text-muted">Saved</span>
            :<span className="text-green">Saving</span>
          }

          </span>
        </h1>
        <CodeEditer value={currentPackage.get('content')} onCodeChange={this.onCodeChange} />
        <button onClick={this.onRemovePackage} className="btn btn-success">destroy</button>
      </div>
    )
  }
}
