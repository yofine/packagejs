import React, { Component, PropTypes } from 'react'

export default class DeferInput extends Component {
  static PropTypes ={
    onChange: PropTypes.func.isRequired,
    value: PropTypes.string.isRequired,
    placeholder: PropTypes.string.isRequired,
  }

  static defaultProps = {
    defer: 500,
  }

  state = {
    value: this.props.value
  }

  onChange = (e) => {
    this.setState({value: e.target.value})
    this.defer(e.target.value, this.props.onChange, this.props.defer)
  }

  defer = (value, func, time=500) => {
    if(this.timer) {
      clearTimeout(this.timer)
    }
    this.timer = setTimeout(() => {
      func(value)
      clearTimeout(this.timer)
    }, time)
  }

  render() {
    const { placeholder } = this.props
    const { value } = this.state
    return  (
      <input
        className="title-input"
        onChange={this.onChange}
        value={value}
        placeholder={placeholder}
      />
    )
  }
}
