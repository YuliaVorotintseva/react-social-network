import React from 'react'
import styleClasses from './Message.module.css'

const Message = ({message, avatar, user=''}) => (
    <div className={styleClasses.Message}>
        <img src={avatar} alt={user} />
        {message}
    </div>
)

export default Message
