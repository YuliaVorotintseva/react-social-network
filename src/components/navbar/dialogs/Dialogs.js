import React from 'react'
import styleClasses from './Dialogs.module.css'
import Items from './items/Items'
import Messages from './messages/Messages'

const Dialogs = ({items, messages, messageText, dispatch}) => {
    return (
        <div className={styleClasses.Dialogs}>
            <Items items={items} />
            <Messages
                messages={messages}
                messageText={messageText}
                dispatch={dispatch}
            />
        </div>
    )
}

export default Dialogs
