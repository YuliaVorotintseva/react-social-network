import React from 'react'
import styleClasses from './Navbar.module.css'
import { NavLink } from 'react-router-dom'

const Navbar = () => (
    <nav className={styleClasses.Navigation}>
        <div className={styleClasses.Item}>
          <NavLink
            to='/profile'
            activeClassName={styleClasses.Active}
          >
            Profile
          </NavLink>
        </div>

        <div className={styleClasses.Item}>
          <NavLink
            to='/dialogs'
            activeClassName={styleClasses.Active}
          >
            Dialogs
          </NavLink>
        </div>

        <div className={styleClasses.Item}>
          <NavLink
            to='/news'
            activeClassName={styleClasses.Active}
          >
            News
          </NavLink>
        </div>

        <div className={styleClasses.Item}>
          <NavLink
            to='/music'
            activeClassName={styleClasses.Active}
          >
            Music
          </NavLink>
        </div>
    </nav>
)

export default Navbar
