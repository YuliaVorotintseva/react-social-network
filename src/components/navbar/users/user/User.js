import React from 'react'
import styleClasses from './User.module.css'

const User = user => (
    <div className={styleClasses.User}>
        <img alt={user.name} src={user.avatar} />
        <p className={styleClasses.Name}>{user.name}</p>
        <p>{user.status}</p>
        
        <div className={styleClasses.Location}>
            <p>{user.location.country}</p>
            <p>{user.location.city}</p>
        </div>

        <div>
            {
                user.followed
                ? <button className={styleClasses.Button} onClick={user.follow}>UNFOLLOW</button>
                : <button className={styleClasses.Button} onClick={user.follow}>FOLLOW</button>
            }
        </div>
    </div>
)

export default User
