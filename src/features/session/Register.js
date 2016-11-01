import React, { Component } from 'react'
import { connect } from 'react-redux'
import { regist } from './redux/register'

const mapStateToProps = (state, ownProps) => {
  return {
    register: state.register
  }
}
@connect(mapStateToProps, { regist })
export default class Register extends Component {

  state = {
    email: null,
    password: null,
    name: null
  }

  onChange = (e) => {
    console.log({[e.target.getAttribute('id')]: e.target.value})
    this.setState({
      [e.target.getAttribute('id')]: e.target.value
    })
  }

  onSubmit = (e) => {
    e.preventDefault()
    this.props.regist(this.state)
  }

  render() {
    return (
      <div className="register-box">
        <div className="register-logo">
          <a>PackageJS</a>
        </div>
        <div className="register-box-body">
          <p className="login-box-msg">Register a new membership</p>
          <form action="../../index.html" method="post">
            <div className="form-group has-feedback">
              <input id="name" onChange={this.onChange} type="text" className="form-control" placeholder="Full name" />
              <span className="glyphicon glyphicon-user form-control-feedback"></span>
            </div>
            <div className="form-group has-feedback">
              <input id="email" onChange={this.onChange} type="email" className="form-control" placeholder="Email" />
              <span className="glyphicon glyphicon-envelope form-control-feedback"></span>
            </div>
            <div className="form-group has-feedback">
              <input id="password" onChange={this.onChange} type="password" className="form-control" placeholder="Password" />
              <span className="glyphicon glyphicon-lock form-control-feedback"></span>
            </div>
            <div className="row">
              <div className="col-xs-8"></div>
              <div className="col-xs-4">
                <button onClick={this.onSubmit} type="submit" className="btn btn-primary btn-block btn-flat">Register</button>
              </div>
            </div>
          </form>
          <a href="login.html" className="text-center">I already have a membership</a>
          {this.props.register.data && <p>注册成功</p>}
        </div>
      </div>
    )
  }
}
