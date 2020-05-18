import React from 'react'
import styleClasses from './Dialogs.module.css'
import Items from './items/Items'
import Messages from './messages/Messages'

const Dialogs = () => {
    return (
        <div className={styleClasses.Dialogs}>
            <Items />
            <Messages />
        </div>
    )
}

export default Dialogs
