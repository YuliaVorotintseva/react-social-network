import React from 'react'
import styleClasses from './Messages.module.css'
import Message from './message/Message'
import CreateMessageContainer from './message/CreateMessageContainer'

const Messages = ({messages}) => (
    <div className={styleClasses.Messages}>
        {
            messages.map(({message, avatar, id}) => <Message
                    key={id}
                    message={message}
                    avatar={avatar}
                />
            )
        }

        <hr />
        <CreateMessageContainer />
    </div>
)

export default Messages
