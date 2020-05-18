import React from 'react'
import styleClasses from './Messages.module.css'
import Message from './message/Message'

const Messages = () => (
    <div className={styleClasses.Messages}>
        <Message message='JavaScript' />
        <Message message='React' />
        <Message message='Redux' />
   </div>
)

export default Messages
