import React from 'react'
import styleClasses from './Friend.module.css'
import { NavLink } from 'react-router-dom'

const Friend = ({avatar, name}) => (
    <div className={styleClasses.Friend}>
        <NavLink
            to={`/${name}`}
            className={styleClasses.Name}
            activeClassName={styleClasses.Active}
        >
            <img src={avatar} alt={name} />
            {name}
        </NavLink>
    </div>
)

export default Friend
