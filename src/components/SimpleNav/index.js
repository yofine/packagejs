import React, { Component } from 'react'


export default (props) => {

  return (
    <aside className="main-sidebar">
      <section className="sidebar" style={{"height": "auto"}}>
        <div className="user-panel">
          <div className="pull-left image">
            <img src="https://avatars0.githubusercontent.com/u/4095888?v=3&s=40" className="img-circle" alt="User Image"  />
          </div>
        </div>
        <ul className="sidebar-menu">
          <li>
            <a href="#">
              <i className="fa fa-plus text-red" aria-hidden="true"></i>
              <span>New Package.json</span>
            </a>
          </li>
        </ul>
      </section>
    </aside>
  )
}
