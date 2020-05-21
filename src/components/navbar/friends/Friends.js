import React from 'react'
import styleClasses from './Friends.module.css'
import Friend from './friend/Friend'

const Friends = ({items}) => {
    return (
        <div className={styleClasses.Friends}>
            {items.map(({id, avatar, name}) => <Friend key={id} avatar={avatar} name={name} />)}
        </div>
    )
}

export default Friends
