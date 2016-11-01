import React, { Component } from 'react'
import { connect } from 'react-redux'
import { login } from './redux/login'

const mapStateToProps = (state, ownProps) => {
  return {
    login: state.login
  }
}
@connect(mapStateToProps, { login })
export default class Login extends Component {

  state = {
    password: null,
    name: null
  }

  onChange = (e) => {
    this.setState({
      [e.target.getAttribute('id')]: e.target.value
    })
  }

  onSubmit = (e) => {
    e.preventDefault()
    this.props.login(this.state)
  }

  render() {
    return (
      <div className="login-box">
        <div className="login-logo">
          <a><b>PackageJS</b></a>
        </div>
        <div className="login-box-body">
          <p className="login-box-msg">Sign in to start your session</p>
          <form>
            <div className="form-group has-feedback">
              <input onChange={this.onChange} id="name" type="name" className="form-control" placeholder="Name" />
              <span className="glyphicon glyphicon-envelope form-control-feedback"></span>
            </div>
            <div className="form-group has-feedback">
              <input onChange={this.onChange} id="password" type="password" className="form-control" placeholder="Password" />
              <span className="glyphicon glyphicon-lock form-control-feedback"></span>
            </div>
            <div className="row">
              <div className="col-xs-8">
              </div>
              <div className="col-xs-4">
                <button onClick={this.onSubmit} type="submit" className="btn btn-primary btn-block btn-flat">Sign In</button>
              </div>
            </div>
          </form>
          <a href="register.html" className="text-center">Register a new membership</a>
        </div>
      </div>
    )
  }
}
