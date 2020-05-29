import React from 'react'
import styleClasses from './Messages.module.css'
import Message from './message/Message'
import { updateMessageActionCreator, sendMessageActionCreator } from '../../../../redux/Creators'
import MessageContainer from '../../../../ui/MessageContainer'
import StoreContext from '../../../../StoreContext'

const Messages = () => (
    <StoreContext.Consumer>
        {
            value => (
                <div className={styleClasses.Messages}>
                {
                    value.state.dialogs.messages.map(({message, avatar, id}) => <Message
                            key={id}
                            message={message}
                            avatar={avatar}
                        />
                    )
                }

                <hr />
                <MessageContainer
                    updateActionCreator={updateMessageActionCreator}
                    addActionCreator={sendMessageActionCreator}
                />
            </div>
            )
        }
    </StoreContext.Consumer>
)

export default Messages
