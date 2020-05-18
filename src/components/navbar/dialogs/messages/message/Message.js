import React from 'react'
import styleClasses from './Message.module.css'

const Message = ({message}) => (
    <div className={styleClasses.Message}>
        {message}
    </div>
)

export default Message
