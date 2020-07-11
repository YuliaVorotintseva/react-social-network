import React from 'react'
import styleClasses from './Header.module.css'
import { NavLink } from 'react-router-dom'

const Header = () => (
    <header className={styleClasses.Head}>
        <img
            src='https://avatars.mds.yandex.net/get-pdb/1368870/4b7c46bc-08b3-4296-98a0-4a969e101280/s1200?webp=false'
            alt='logo'
        />

        <NavLink
            to='/auth'
            activeClassName={styleClasses.Active}
        >
            Auth
        </NavLink>
    </header>
)

export default Header
