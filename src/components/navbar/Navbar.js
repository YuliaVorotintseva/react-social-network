import React from 'react'
import styleClasses from './Navbar.module.css'

const Navbar = () => (
    <nav className={styleClasses.Navigation}>
        <div className={styleClasses.Item}>
          <a href=''>Profile</a>
        </div>
        <div className={styleClasses.Item}>
          <a href=''>Messages</a>
        </div>
        <div className={styleClasses.Item}>
          <a href=''>News</a>
        </div>
        <div className={styleClasses.Item}>
          <a href=''>Music</a>
        </div>
    </nav>
)

export default Navbar
