import React from 'react'

function ContainerWrapper(props) {

  return (
    <div className="content-wrapper" style={{minHeight: 916}}>
      {props.children}
    </div>
  )
}

export default ContainerWrapper
