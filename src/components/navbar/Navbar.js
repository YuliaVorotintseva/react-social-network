import React from 'react'
import styleClasses from './Navbar.module.css'
import { NavLink } from 'react-router-dom'
import CreateFriendsContainer from './friends/CreateFriendsContainer'

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
            Messages
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

        <div className={styleClasses.Item}>
          <NavLink
            to='/users'
            activeClassName={styleClasses.Active}
          >
            Users
          </NavLink>
        </div>

        <CreateFriendsContainer />
    </nav>
)

export default Navbar
