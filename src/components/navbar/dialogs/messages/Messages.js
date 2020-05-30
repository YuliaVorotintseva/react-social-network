import React from 'react'
import styleClasses from './Messages.module.css'
import Message from './message/Message'
import { updateMessageActionCreator, sendMessageActionCreator } from '../../../../redux/Creators'
import MessageContainer from '../../../../ui/MessageContainer'
import StoreContext from '../../../../StoreContext'

const Messages = () => (
    <div className={styleClasses.Messages}>
        <StoreContext.Consumer>
            {
                value => value.state.dialogs.messages.map(({message, avatar, id}) => <Message
                    key={id}
                    message={message}
                    avatar={avatar}
                    />
                )
            }
        </StoreContext.Consumer>

        <hr />
        <MessageContainer
            updateActionCreator={updateMessageActionCreator}
            addActionCreator={sendMessageActionCreator}
        />
    </div>
)

export default Messages
