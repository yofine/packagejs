import React, { Component } from 'react'
import '../../images/photo-1476813001184-9044d31e0ad1.jpeg'
import './index.less'

export default class ImageView extends Component {


  render() {
    const style = {
      backgroundSize: "cover",
      backgroudImage: "url(/assets/img/photo-1476813001184-9044d31e0ad1.jpeg)",
      height: 500,
      width: '100%',
    }

    return (
      <div style={style} className="cover-image"></div>
    )

  }
}
