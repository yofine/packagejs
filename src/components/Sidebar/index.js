import React from 'react'
import { Link } from 'react-router'

function Sidebar({ items }) {

  return (
    <aside className="main-sidebar">
      <section className="sidebar" style={{height: 'auto'}}>
        <ul className="sidebar-menu">
          {items.map( e => {
            return (
              <li key={`nav-${e.name}`}>
                <Link to={e.path}>
                  <i className={`fa fa-${e.icon}`}></i><span>{e.name}</span>
                </Link>
              </li>
            )
          })}
        </ul>
      </section>
    </aside>
  )
}

export default Sidebar
