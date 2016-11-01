import React, { Component, PropTypes } from 'react'
import { Link } from 'react-router'
import './index.less'
import CodeEditer from '../CodeEditer'

export default class PackageList extends Component {
  static PropTypes ={
    list: PropTypes.array.isRequired,
  }

  renderPackagePreview = (list) => {
    const prefix = this.props.prefix
    const preview = function(item) {
      console.log(item.updatedAt)
      return (
        <li key={item.id}>
          <div className="package-preview">
            <Link to={`/${prefix}/${item.id}`}>
              <span style={{fontWeight: 'bold', color: 'black'}}>{item.get('title') || 'Untitled'}</span>
              <span>&nbsp;-&nbsp;</span>
              <span>{`/${prefix}/${item.id}`}</span>
            </Link>
            <br />
            <span style={{color: "rgb(155, 155, 155)"}}>
              <span>Last edited</span>
            </span>
            <CodeEditer value={item.get('content')} readOnly={true} />
          </div>
        </li>
      )
    }
    return (
      <ul>
      {list.map(preview)}
      </ul>
    )
  }

  render() {
    const list = this.props.list || []
    const NoData = () => {
      return <span>no data</span>
    }
    return (
      <div className="package-list">
        {
          list.length > 0
          ?this.renderPackagePreview(list)
          :<NoData />
        }
      </div>
    )
  }
}
