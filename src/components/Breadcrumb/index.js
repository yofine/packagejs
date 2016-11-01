import React from 'react'

function Breadcrumb({ items }) {

  return (
    <ol className="breadcrumb">
      {items.map(item => {
        return <li key={item.name}><i className={`fa fa${item.icon}`} />{item.name}</li>
      })}
    </ol>
  )
}

export default Breadcrumb
