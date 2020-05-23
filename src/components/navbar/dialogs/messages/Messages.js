import React from 'react'
import styleClasses from './Messages.module.css'
import Message from './message/Message'
import CreateMessage from '../../../../ui/CreateMessage'
import { updateMessageActionCreator, sendMessageActionCreator } from '../../../../redux/Creators'

const Messages = ({messages, messageText, dispatch}) => (
    <div className={styleClasses.Messages}>
        {messages.map(({message, avatar, id}) => <Message
            key={id}
            message={message}
            avatar={avatar}
        />)}

        <hr />
        <CreateMessage
            text={messageText}
            dispatch={dispatch}
            updateActionCreator={updateMessageActionCreator}
            addActionCreator={sendMessageActionCreator}
        />
   </div>
)

export default Messages
