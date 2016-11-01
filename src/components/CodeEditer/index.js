import React, { Component, PropTypes } from 'react'
import CodeMirror from 'codemirror'
import 'codemirror/lib/codemirror.css'
import 'codemirror/keymap/sublime.js'
import 'codemirror/addon/edit/closebrackets.js'
import 'codemirror/addon/edit/matchbrackets.js'
import 'codemirror/addon/selection/active-line.js'
import 'codemirror/theme/ttcn.css'

import { rekit } from './mock'
import './index.less'

export default class CodeEditor extends Component {

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
      //styleActiveLine: true,
    })
    this.codeEditor.on('change', this.props.onChange)
    window.codeEditor = this.codeEditor
  }

  componentWillReceiveProps(nextProps) {
    if(nextProps.value !== this.props.value) {
      this.codeEditor.setOption(nextProps)
    }
  }

  render() {
    return (
      <div className="editor-wrap">
        <div ref={(editor) => this.editor = editor}></div>
      </div>
    )
  }
}
