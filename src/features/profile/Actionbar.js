import React, { Component } from 'react'
import { connect } from 'react-redux'
import { createPackage } from './redux/package'
import { push } from 'react-router-redux'
import { fetchPackage } from './redux/package'

@connect()
export default class Profile extends Component {

  componentWillMount() {
    this.props.dispatch(fetchPackage())
  }

  onClick = (e) => {
    this.props.dispatch(createPackage())
  }

  redirect = () => {
    const { dispatch, params } = this.props
    dispatch(push(`/${params.username}`))
  }

  render() {
    const username = this.props.params.username
    return (
      <div>
        <aside className="main-sidebar">
          <section className="sidebar" style={{"height": "auto"}}>
            <div className="user-panel">
              <div className="pull-left image">
                <img onClick={this.redirect} src="https://avatars0.githubusercontent.com/u/4095888?v=3&s=40" className="img-circle" alt="User Image"  />
              </div>
            </div>
            <ul className="sidebar-menu">
              <li>
                <a href="javascript:;" onClick={this.onClick}>
                  <i className="fa fa-plus text-red" aria-hidden="true" />
                  <span>New Package.json</span>
                </a>
              </li>
            </ul>
          </section>
        </aside>
        <div className="content-wrapper" style={{minHeight: 916}}>
        {this.props.children}
        </div>
      </div>
    )
  }
}
