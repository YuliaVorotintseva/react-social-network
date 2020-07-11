import React from 'react'
import styleClasses from './User.module.css'
import { NavLink } from 'react-router-dom'
import Button from '../../../ui/button/Button'

const User = user => (
    <div className={styleClasses.User}>
        <NavLink
            to={`/profile/${user.id}`}
        >
            <img alt={user.name} src={user.avatar} />
        </NavLink>
        <p className={styleClasses.Name}>{user.name}</p>
        <p>{user.status}</p>
        
        <div className={styleClasses.Location}>
            <p>{user.location.country}</p>
            <p>{user.location.city}</p>
        </div>

        <div>
            {
                user.followed
                ? <Button onClick={user.follow}>UNFOLLOW</Button>
                : <Button onClick={user.follow}>FOLLOW</Button>
            }
        </div>
    </div>
)

export default User
