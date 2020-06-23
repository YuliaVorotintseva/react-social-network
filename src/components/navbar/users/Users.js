import React from 'react'
import styleClasses from './Users.module.css'
import User from './user/User'

const Users = ({users, follow}) => (
    <div className={styleClasses.Users}>
        {
            users.map(user => (
                <User
                    key={user.id}
                    avatar={user.avatar}
                    name={user.name}
                    followed={user.followed}
                    status={user.status}
                    location={user.location}
                    follow={() => follow(user.id)}
                />)
            )
        }
    </div>
)

export default Users
