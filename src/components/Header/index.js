import React from 'react'

function Header(props) {

  return (
    <header className="main-header" style={{zIndex: 996}}>
      <a className="logo">
        <span className="logo-mini"><b>P</b></span>
        <span className="logo-lg"><b>Package</b>JS</span>
      </a>
      <nav className="navbar navbar-static-top" role="navigation">
      </nav>
    </header>
  )
}

export default Header
