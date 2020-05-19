import React from 'react'
import styleClasses from './Messages.module.css'
import Message from './message/Message'
import CreatePost from '../../profile/createpost/CreatePost'

const Messages = ({messages}) => (
    <div className={styleClasses.Messages}>
        {messages.map(({message, avatar, id}) => <Message key={id} message={message} avatar={avatar} />)}
        <hr />
        <CreatePost />
   </div>
)

export default Messages
