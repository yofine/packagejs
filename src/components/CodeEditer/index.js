import React, { Component, PropTypes } from 'react'
import CodeMirror from 'codemirror'
import 'codemirror/lib/codemirror.css'
import 'codemirror/keymap/sublime.js'
import 'codemirror/addon/edit/closebrackets.js'
import 'codemirror/addon/edit/matchbrackets.js'
import 'codemirror/addon/selection/active-line.js'
import 'codemirror/theme/ttcn.css'

//import { rekit } from './mock'
import './index.less'

export default class CodeEditor extends Component {

  static PropTypes ={
    onCodeChange: PropTypes.func.isRequired,
    value: PropTypes.string.isRequired,
  }

  componentDidMount() {
    this.codeEditor = CodeMirror(this.editor, {
      value: this.props.value || '',
      mode: "javascript",
      json: true,
      autoCloseBrackets: true,
      matchBrackets: true,
      theme: 'ttcn',
      tabSize: 2,
      lineNumbers: true,
      readOnly: this.props.readOnly || false,
    })
    this.codeEditor.on('change', this.onChange)
  }

  onChange = (cm) => {
    debugger
    this.defer(cm, this.props.onCodeChange, 500)
  }

  defer = (value, func, time=500) => {
    debugger
    if(this.timer) {
      clearTimeout(this.timer)
    }
    this.timer = setTimeout(() => {
      func(value)
      clearTimeout(this.timer)
    }, time)
  }

  render() {
    return (
      <div className="editor-wrap">
        <div ref={(editor) => this.editor = editor}></div>
      </div>
    )
  }
}
